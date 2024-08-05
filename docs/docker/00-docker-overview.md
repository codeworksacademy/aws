# Dockerizing and Hosting a Web Application on an EC2 Instance

In this guide, we will use Github Actions to build, tag, and upload your application to dockerhub. We will also use actions to send your `docker-compose` file to your ec2 instance to run the containerized application. 

## Prerequisites

Before you can host a web application on an EC2 instance, you need to have the following:

* An EC2 instance running in your AWS account
* An EC2 instance with Docker installed
* A web application that you want to host on the EC2 instance
* SSH access to your EC2 instance
* A DockerHub account

## Dockerizing Your Web Application

To host a web application on an EC2 instance, you need to containerize your application using Docker. This involves creating a `Dockerfile` that specifies how to build your application and run it inside a container.

To dockerize your web application, follow these steps:

1. Create a `Dockerfile` in the root directory of your web application. The `Dockerfile` should contain the following instructions:

```Dockerfile
# Use an official Node.js runtime as the base image
```

2. Create a `docker-compose.yml` file in the root directory of your web application. The `docker-compose.yml` file should contain the following instructions:

```yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
```
