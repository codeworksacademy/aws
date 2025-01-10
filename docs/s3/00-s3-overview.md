# Image Upload with AWS S3

Image upload is a common feature of many modern web apps, and being able to to manage it appropriately is a little tricker than just selecting the "file" type for your form input.

Amazon Simple Storage Service (S3) is a scalable object storage service that allows you to store and retrieve data from anywhere on the web. In this guide, you will learn how to upload files to an AWS S3 bucket using Node.js.

In this unit we will cover the following
- Creating an AWS s3 bucket for file storage
- Connect an express backend to the s3 client using the `aws-sdk`
- Upload an image using postman and using form-data from a client
- Upload images to your s3 bucket using the `aws-sdk`
- Store images in user directories tied to `auth0`
- Compressing images using the `sharp` library

*While much of this unit will be focused on basic image upload much of it can be incorporated for general file upload as well.*

