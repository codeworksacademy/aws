# Uploading Data to an AWS S3 Bucket in Node.js

Amazon Simple Storage Service (S3) is a scalable object storage service that allows you to store and retrieve data from anywhere on the web. In this guide, you will learn how to upload files to an AWS S3 bucket using Node.js.

## Prerequisites

* AWS account with an S3 bucket created.
* Node.js installed on your machine.
* AWS SDK for JavaScript (v3).

## Setup

1. **Install AWS SDK**

```bash
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
```

2. **Configure AWS Credentials**
   Ensure your AWS credentials are configured. You can use the AWS CLI to configure your credentials:

```bash
aws configure
```

   Alternatively, set environment variables:

```bash
export AWS_ACCESS_KEY_ID=your_access_key_id
export AWS_SECRET_ACCESS_KEY=your_secret_access_key
export AWS_REGION=your_region
```

## Uploading File to S3

### Step 1: Create an S3 Client

```javascript
const {
    S3Client,
    PutObjectCommand
} = require("@aws-sdk/client-s3");
const fs = require("fs");
const path = require("path");

const s3 = new S3Client({
    region: "your-region"
});
```

### Step 2: Define the Upload Function

```javascript
async function uploadFile(fileName) {
    const fileStream = fs.createReadStream(fileName);
    const uploadParams = {
        Bucket: "your-bucket-name",
        Key: path.basename(fileName), // File name you want to save as in S3
        Body: fileStream,
    };

    try {
        const data = await s3.send(new PutObjectCommand(uploadParams));
        console.log("Upload Success", data);
    } catch (err) {
        console.log("Error", err);
    }
}

uploadFile("path/to/your/file.txt");
```

### Step 3: Handle File Upload in Your Server

Assuming you are using Express.js to handle file uploads:

```javascript
const express = require('express');
const multer = require('multer');
const upload = multer({
    dest: 'uploads/'
});

const app = express();

app.post('/upload', upload.single('file'), (req, res) => {
    const filePath = req.file.path;
    uploadFile(filePath)
        .then(() => res.status(200).send("File uploaded successfully"))
        .catch(err => res.status(500).send(err));
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
```

### Step 4: Clean Up

After uploading to S3, you may want to delete the local file:

```javascript
fs.unlink(filePath, (err) => {
    if (err) {
        console.error('Error deleting file:', err);
    } else {
        console.log('File deleted successfully');
    }
});
```

## Testing

* Use a tool like Postman to send a POST request to `http://localhost:3000/upload` with a file.
* Check your S3 bucket to confirm the file is uploaded.

## Conclusion

By following these steps, you can successfully upload files to an AWS S3 bucket from a Node.js server.
