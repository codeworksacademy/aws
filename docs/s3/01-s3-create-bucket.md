# Creating an S3 Bucket

Starting from the [AWS Management Console](https://aws.amazon.com/console/) navigate to the **s3** service under storage. *It would be wise to ⭐ this to your navbar for easier access*.

Before you create your first bucket, make sure you have selected an appropriate **region** (selectable in the upper right corner of the page)


We will be creating a **General Purpose Bucket**, and start by clicking the `create bucket` button.

## Configuration

You will land on a page to configure the settings of this bucket. Almost all the settings we want are the default but we will go over each of them regardless.


1. **General Configuration**
    - Select `General purpose` Bucket.
    - Give your bucket a name. This must be unique across all AWS services, we are using `cw-upload-demo`.

2. **Object Ownership**
    - Select `ACLs disabled (recommended)`

3. **Block Public Access settings for this bucket**
    - *Deselect* `Block all public access`
    - Acknowledge the warning that this bucket will be made public

4. **Bucket Versioning**
    - Disable bucket versioning

5. **Tags**
    - Not adding any tags

6. **Default encryption**
    - Encryption type: `Server-side encryption with Amazon S3 managed keys (SSE-S3)`
    - Bucket Key: `Enable`

We will not change any advanced settings. Now you can click the create button on the bottom of the page to create our bucket.

You should be brought back to the s3 Buckets homepage and you should see your newly created bucket. Click on it to enter it.

From here you can browse *objects* or files that have been uploaded to this bucket or even upload them yourself.

## Additional Configuration

We will want to head to the *Permissions* of our created bucket and `edit` our **Bucket Policy**.

Paste this json code into your policy. This will allow public access to the files within your bucket. You might not always want this but our usage will be for image/public file storage so it makes sense that access to these files is public.

 >*You must change the name in the resource to the name of your bucket!*

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "MakeItPublic",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::cw-upload-demo/*" // [!code highlight] 
        }
    ]
}
```

Don't forget to save the changes!

You are now ready to upload to this bucket.!
