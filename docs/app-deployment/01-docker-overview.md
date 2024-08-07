# Dockerizing and Hosting a Web Application on an EC2 Instance

In this guide, we will use Github Actions to build, tag, and upload your application to dockerhub. We will also use gh-actions to send your `docker-compose` file to your ec2 instance to run the containerized application. 

While there are many ways to deploy a web application to an EC2 instance, using Docker and Github Actions is a popular choice because it simplifies the deployment process and makes it easier to manage your application's dependencies and environment. 

This approach will allow you to establish a CI/CD pipeline for your web applications, making it easier to deploy updates and new features to your application.

## Prerequisites

Before you can host a web application on an EC2 instance, you need to have the following:

* [An EC2 instance running in your AWS account](/docs/ec2/01-create-an-instance)
* [SSH access to your EC2 instance](/docs/ec2/02-connecting-to-ec2)
* A web application that you want to host on the EC2 instance
* [A DockerHub account](https://hub.docker.com/)

## Dockerizing Your Web Application

The first step in hosting a web application on an EC2 instance is to containerize your application using Docker. This involves creating a `Dockerfile` that specifies how to build and run your application in a container.

This guide assumes that you have a web application that is written in a framework requiring a `build` step to be published. For example, a Vue, React or Angular application that requires a `npm run build` command to generate the static files. This guide will also assume that you have a server-side application that serves the static files from a folder named *`www`* or *`wwwroot`*.

```bash
application
├── client
│   └── 📦 package.json
└── server
    └── 🐋 Dockerfile
    └── 📁 www # static files
```

1. Ensure you have a `Dockerfile` in the root directory of your `server`. The `Dockerfile` should contain the following instructions:

::: code-group

```Dockerfile [node]

# Use an official Node.js runtime as the base image for the client build
FROM --platform=linux/amd64 node:20-slim AS client-builder
# Set the working directory in the client builder container
WORKDIR /app/client
# Copy the client application source code to the client builder container
COPY client ./
# Install client application dependencies
RUN npm install
# Build the client-side code
RUN npm run build
# Use a smaller base image for the final server image

FROM node:20-slim
# Set the working directory in the server container
WORKDIR /app/server
# Copy the server application source code to the server container
COPY server ./
# Install server application dependencies
RUN npm install
# Copy the built client files from the client builder container
# into the server's www directory
COPY --from=client-builder /app/client/dist /app/server/www
# Define the command to start your Node.js application
CMD [ "node", "index.js" ]
```

```Dockerfile [dotnet]
# Use an official Node.js runtime as the base image for the client build
FROM --platform=linux/amd64 node:20-slim AS client-builder
# Set the working directory in the client builder container
WORKDIR /app/client
# Copy the client application source code to the client builder container
COPY client ./
# Install client application dependencies
RUN npm install
# Build the client-side code
RUN npm run build

# The dotnet version should match the version of your application
FROM mcr.microsoft.com/dotnet/sdk:8.0-alpine-amd64 AS build-env
# Set the working directory in the build environment
WORKDIR /app/server
# Copy the server application source code to the build environment
COPY server ./
# Restore as distinct layers
RUN dotnet restore
# Copy the built client files from the client builder container
# into the server's www directory
COPY --from=client-builder /app/client/dist /app/server/wwwroot
# Build and publish a release
RUN dotnet publish -c Release -o out

# Start runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build-env /app/server/out .
CMD ASPNETCORE_URLS=http://*:$PORT dotnet <APP_NAME>.dll
```

:::

2. Create a `docker-compose.yml` file in the root directory of your web application. The `docker-compose.yml` file should contain the following instructions:

::: details ⚠️ docker-compose rules

* Replace `<dockerhub-username>` and `<app_name>` with your DockerHub username 
 and the name of your application
* The name of the application must be lowercased and url safe
* The `env_file` key is optional and can be used to reference an environment file
* The `ports` key is used to map the application port to the EC2 instance port
* The `restart` key is set to `unless-stopped` to ensure the container restarts if it stops unexpectedly

:::

```yaml{4,7,9}
version: '3'
services:
  app:
    image: <dockerhub-username>/<app_name>:latest 
    restart: unless-stopped
    env_file:
      - <app_name>.env # Optional: reference an environment file
    ports:
      - "7045:80" # ec2-port:app-port verify the port mapping
```

::: details 🐳 Create a DockerHub Account

DockerHub is a cloud-based registry service that allows you to store and manage your Docker images. You can use DockerHub to build, test, and deploy your containerized applications.

For this guide, you will need to create a DockerHub account and generate a Personal Access Token to authenticate with DockerHub. We will use this token to push your Docker images to DockerHub from a github action.

### Setting up DockerHub

1. Go to [DockerHub](https://hub.docker.com/) and create an account.

![docker-login](/images/docker1.png)

2. Make a note of your DockerHub username.
3. Generate a new Personal Access Token by going to your DockerHub [***account settings -> security -> Personal Access Tokens***](https://app.docker.com/settings/personal-access-tokens).  

![docker-login](/images/docker2.png)

![docker-login](/images/docker3.png)

  + Name the token and give it (*read, write, delete*) permissions.

![docker-login](/images/docker4.png)

  + Keep the token secure as it will be used as your DockerHub password.
  + Do not share the token with anyone.
  + Do not store the token in your codebase.
  + Do not commit the token to your version control system.
  + Do not hardcode the token in your scripts.
4. Copy the Personal Access Token and store it securely.
  + [We will use Github Secrets to store the token securely](/docs/app-deployment/02-github-actions-and-secrets.md).

:::
