# Enhancements with Sharp

Image upload is a great feature to add into any project, but file storage is not a free service, and it's in our best interest that this service is as cheap as possible. It's not just about saving money though. Improperly sized or formatted images can lead to a sluggish and slow experience for the user when there could be many assets loading into the webpage at once.

[Sharp](https://sharp.pixelplumbing.com/) is a image processing library that will enable us to properly format and sized for the web.

## Install

Again make sure to open your terminal at the appropriate level for your server and run this command to install the package. 

::: code-group
```bash install
npm install sharp
```

```bash used version
npm install sharp@0.32.6
```
:::

::: tip ⚠️
*Students have had issues with the newest version of sharp before so the exact version we have used is also listed here if you have issues.*
:::

## Updating the Service

This is another step we will need to add into our service layer. This could be abstracted into it's own *sharpService* since it's such a robust library but for now we will create a simple method for general use.

Basically, `sharp` is going to take the data portion of our image and compress it to make it smaller to store. There is a good chance the image they uploaded is a much higher resolution than we need for our website.

::: tip
Think about the common scenario of someone uploading a profile picture. The image they choose might be from their smart phone, a huge resolution image packed with detail, that is ultimately going to end up as a 200px x 200px circle on our website.
:::

In this example we are going to create a `sharp` instance of the data, compress it down and extract out that data back to a buffer.


::: code-group
```js jpeg
//imports 
import sharp from "sharp";

//uploadImage
 async uploadImage(imageFile, userId) { 
    const sharpImage = sharp(imageFile.data) // add our image data into a sharp instance
    const jpegOptions = {quality: 50, chromaSubsampling: '4:4:4' } // compression options
    const jpeg = await sharpImage.jpeg(jpegOptions).toBuffer() // compress data
    const uploadRequest = new PutObjectCommand({
      Bucket: awsBucket,
      Key: `${userId}/${imageFile.name}`, 
      Body: jpeg, 
      ContentType: 'image/jpeg', // [!code highlight] this is now a jpeg regardless of what the user uploads
      CacheControl: 'max-age=36000' 
    })
    //...
  }
```
```js webp
//imports 
import sharp from "sharp";

//uploadImage
 async uploadImage(imageFile, userId) { 
    const sharpImage = sharp(imageFile.data) // add our image data into a sharp instance
    const webpOptions = { quality: 20, nearLossless: true } // compression options
    const webp = await sharpImage.webp(webpOptions).toBuffer() // compress data
    const uploadRequest = new PutObjectCommand({
      Bucket: awsBucket,
      Key: `${userId}/${imageFile.name}`, 
      Body: webp, 
      ContentType: 'image/webp', // [!code highlight] this is now a webp regardless of what the user uploads
      CacheControl: 'max-age=36000' 
    })
    //...
  }
```
::: 

Sharp has many other [output types](https://sharp.pixelplumbing.com/api-output)

Taking the file and compressing it's data down is a good start, but resizing the is a great way to really save on stored data.

```js jpeg
 async uploadImage(imageFile, userId) { 
    const sharpImage = sharp(imageFile.data) // add our image data into a sharp instance
     const shrunkImage = sharpImage.shrink({width: 500}) // [!code highlight] Shrink the image 
    const jpegOptions = {quality: 50, chromaSubsampling: '4:4:4' } // compression options
    const jpeg = await shrunkImage.jpeg(jpegOptions).toBuffer() // compress data
    const uploadRequest = new PutObjectCommand({
      Bucket: awsBucket,
      Key: `${userId}/${imageFile.name}`, 
      Body: jpeg, 
      ContentType: 'image/jpeg', // this is now a jpeg regardless of what the user uploads
      CacheControl: 'max-age=36000' 
    })
    //...
  }
```

In this instance we just resized it to be **500px** in width, with no height given it will automatically resized based on aspect ratio. The size you pick here really depends on you application and could depend on each upload type. The little profile bubbles don't need to be as big as potentially and image the user is trying to share.

For the best results you will need to experiment with the options you have available to you.


### Better Responses

Now with sharp, we can access more data about the image that we could have before, data that we can use to enrich our response to our client.

```js 
 async uploadImage(imageFile, userId) { 
    const sharpImage = sharp(imageFile.data) 
    const shrunkImage = sharpImage.shrink({width: 500})
    const webpOptions = { quality: 20, nearLossless: true } 
    const webp = await shrunkImage.webp(webpOptions).toBuffer() 
    const uploadRequest = new PutObjectCommand({...})
    // ...
    const response = await client.send(uploadRequest)
    console.log('uploaded completed', response)

    let url = `https://${awsBucket}.s3.${awsRegion}.amazonaws.com/${userId}/${imageFile.name}`

    const metadata = await shrunkImage.metadata() // data baked into the image
    const size = webp.length / 1024 / 1024 // file size in megabytes
    return {
      url,
      size,
      width: metadata.width
      height: metadata.height
    }
  }
```

Now your response will include richer information about the image that was uploaded that can be used on your client for better representation.


