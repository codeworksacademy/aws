# Uploading to an AWS S3 Bucket

While this upload process can be added to any project's node backend it might be wiser to setup a dedicated backend to handle just file upload.

## Prerequisites

* AWS account with an S3 bucket created.
* AWS IAM User with an access key

## Setup

### Install AWS SDK

Open a terminal up to your servers top level and install a the *aws-sdk* node package using this command.

```bash
npm install @aws-sdk/client-s3
```

### AWS Credentials

We are going to a few more variables to our `.env` file so later we can have our server talk to our s3 bucket using the aws-sdk.

::: code-group
```bash .env
#...
AWS_BUCKET=your_bucket_name
AWS_REGION=your_region
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
```
```bash example
AWS_BUCKET=cw-upload-demo
AWS_REGION=us-west-2
AWS_ACCESS_KEY_ID=AKIAZI2LDV47N4OWVZ8B
AWS_SECRET_ACCESS_KEY=qFzSMKKa2bycYwcs7pceM0E3LDRJ+Inc5AnKls+m
# for example only
```
:::

### Install Express File Upload

This is another library that allows our express server to easily capture incoming files on the request body. [express-fileUpload](https://www.npmjs.com/package/express-fileupload)

```bash
npm install express-fileupload
```

## Server Side Upload

If you are working within the MVC pattern (the BCW template) we will want to make sure that we create a controller and service for uploading.

### File Upload Middleware

In your controller we will want to add in a piece of middleware imported from [express-fileUpload](https://www.npmjs.com/package/express-fileupload) so we can capture or uploaded files.

```js
import fileUpload from "express-fileupload";
//...Controller
constructor(){
    super('api/upload')
    .use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 } }))
    .post('', this.uploadImage)
}
```

::: tip
fileUpload takes in an options object where you can pass a limit of file size to be passed. Here we added it in for `50mb`
:::

### Getting Files Off Request

Next we will want to *get* the files out of the body so we can send them to our service and upload them to aws.

Using [express-fileUpload](https://www.npmjs.com/package/express-fileupload), files uploaded with the request will be attached to the `request.files` property as an object of key value pairs. When uploading files from the front end, we will be using a multi-part form, where the name of the input is our *key* and the file we selected to upload is the *value*.

To test this we can open up **Post Man**. Set up a new post request and under the *body* choose `form-data`. Enter in a *key* then select file from the drop down. From there you should be able to select any file from your computer for the *value*.

```js
 async uploadImage(request, response, next) {
    try {
      console.log(request.files)
      //..
    } catch (error) {
      next(error)
    }
  }
```

This console log should output an object that contains the *key* you specified and details about the file you selected.
To capture this, lets create another variable.

```js
 async uploadImage(request, response, next) {
    try {
      console.log(request.files)
      const image = request.files.banana // [!code highlight]
      //..
    } catch (error) {
      next(error)
    }
  }
```

::: info ⚠️
Yes the example uses `banana`. This is the *key* from your form and our form in postman uses `banana`. This should be something like `image` or `upload` and not `banana`.
:::

After we have captured the image file lets send it to our service.

### Service and AWS Client

The first thing we need to do in our service to allow uploading is connect to our s3 bucket using the `aws-sdk` and the `.env` variables we set up earlier. We are also going to import the `PutObjectCommand` and the `DeleteObjectCommand` for uploading and removing files. These are created outside the class definition.

```javascript
import { DeleteObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const awsBucket = process.env.AWS_BUCKET
const awsRegion = process.env.AWS_REGION
const client = new S3Client({
  region: awsRegion,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }
})
```

### Sending the file to s3

Now in our service's `uploadImage` function, lets send the file to the bucket. We first need to create a new `PutObjectCommand`, filling out the details and data of the file we are about to store.

If the response is good, we can send a URL of where that image will be stored inside of AWS. This isn't part of the response from AWS it's just combining some of the data we already have in the correct format.


```js
  async uploadImage(imageFile) {
    const uploadRequest = new PutObjectCommand({
      Bucket: awsBucket, // cw-upload-demo
      Key: imageFile.name, // negative-orangutan.png
      Body: imageFile.data, // byte buffer of image data
      ContentType: imageFile.mimetype, // image/png
      CacheControl: 'max-age=36000' // how long to cache requests for this image
    })
    const response = await client.send(uploadRequest) // Send the image to s3
    console.log('uploaded completed', response)

    let url = `https://${awsBucket}.s3.${awsRegion}.amazonaws.com/${imageFile.name}` // return the url this image is stored at
    return url
  }
```

Send this url back to the user that made this request!

```js
 async uploadImage(request, response, next) {
    try {
      console.log(request.files)
      const image = request.files.banana 
      const imageUrl = await uploadService.uploadImage(image)
      response.send({imgUrl})  // We wrap it up in an object so the response back in postman is an object.
    } catch (error) {
      next(error)
    }
  }
```

Now when you send the post request it should be uploading that image to your s3 bucket. Double check the url holds the image you selected, and verify in the AWS console that that image is now in the bucket.

::: tip
If your are unable to view the image that you just uploaded something might not have worked. Verify with the debug console that the response to your AWS s3 bucket was successful and if not look for an error message.

A common error is not having the correct bucket permissions set, or the public bucket policy.

Or your IAM user might not have the correct permissions set.
::: 

### Authorized Uploads

Right now we only have the most basic form of file upload, everyone who does upload would be dumping them into one place inside our bucket. We not only want some form of organization but we also want to make sure that users cannot overwrite or delete each others uploads.


Lets add in the usual Auth0 middleware, and pull the `userId` out in the controller, so it can be passed to the service.


::: code-group
```js Constructor
import fileUpload from "express-fileupload";
//...Controller
constructor(){
    super('api/upload')
    .use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 } }))
    .use(Auth0Provider.getAuthorizedUserInfo) // [!code highlight]
    .post('', this.uploadImage)
}
```

```js UploadImage
 async uploadImage(request, response, next) {
    try {
      console.log(request.files)
      const userId = request.userInfo.id // [!code highlight]
      const image = request.files.banana 
      const imageUrl = await uploadService.uploadImage(image, userId) // [!code highlight]
      response.send({imgUrl})  // We wrap it up in an object so the response back in postman is an object.
    } catch (error) {
      next(error)
    }
  }
```
:::

Now in our service function we can modify the `Key` under which this image is stored with the `userId`. This extra string and `/` in the key will save this image in a *directory* in our s3 bucket, using that user's id. and the image inside of that *directory*. 

```js
  async uploadImage(imageFile, userId) { // [!code highlight]
    const uploadRequest = new PutObjectCommand({
      Bucket: awsBucket,
      Key: `${userId}/${imageFile.name}`, // 67571d8f7xyz984af8/negative-orangutan.png // [!code highlight]
      Body: imageFile.data, 
      ContentType: imageFile.mimetype,
      CacheControl: 'max-age=36000' 
    })
    const response = await client.send(uploadRequest)
    console.log('uploaded completed', response)

    let url = `https://${awsBucket}.s3.${awsRegion}.amazonaws.com/${userId}/${imageFile.name}` // [!code highlight]
    return url
  }
```

Try it out. Post another image, this time with bearer token set in postman, and now your s3 bucket should have a *directory* for your `userId` with the image inside of it.

As long as each user's files are stored under their id, and that id is added by the server, you won't have overlap in your files.
