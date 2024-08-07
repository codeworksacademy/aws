# Github Actions and Secrets

GitHub Actions is a powerful automation tool that allows you to build, test, and deploy your code directly from your GitHub repository. You can use GitHub Actions to automate your workflows, create custom CI/CD pipelines, and integrate with other tools and services.

In this guide, we will walk you through the process of setting up GitHub Actions to deploy your web application to an EC2 instance. We will use GitHub Actions to build a Docker image, push it to DockerHub, and deploy it to an EC2 instance. We will also show you how to securely store your DockerHub credentials using GitHub Secrets.

## Assumptions

This guide assumes you have the following:

* A GitHub account and a GitHub repository containing your web application
* An EC2 instance running in your AWS account
* SSH access to your EC2 instance
* A DockerHub account and Personal Access Token (PAT)
* You have the bcw CLI installed on your local machine
  + `npm i -g bcw`

## Setting up GitHub Actions

In this guide, we will use GitHub Actions to automate the deployment of your web application to an EC2 instance. We will create two workflows: one to build and push the Docker image to DockerHub, and another to deploy the application to the EC2 instance.

## Step 1: BCW Add

Using the `bcw` CLI we will add the necessary GitHub Actions workflows to your repository. 

From the root of your application you will run `bcw add` and select the `workflow_docker_ec2` option. 

```bash
bcw add
```

![bcw-add](/images/image47.png)

This will create a `.github/workflows` directory with two files `build.yml` and `deploy.yml` .

Your directory structure should now look like this:

```bash
application
├── .github/workflows
│   ├── build.yml
│   └── deploy.yml
├── client
│   └── 📦 package.json
└── server
    └── 🐋 Dockerfile
    └── 📁 www # static files
```

These files contain the instructions needed to build and push your application image to dockerhub then deploy your `docker-compose.yml` to your ec2 instance. Finally it will run the `docker-compose up -d` command to start your application.

You shouldn't need to change any of the code in these two files. But lets review them to understand what they are doing. 

::: code-group 

```yaml [build.yml]
name: Docker Build

on:
  push:
    branches:
      - main

jobs:
  build-push-deploy:
    runs-on: ubuntu-latest
    if: contains(github.event.head_commit.message, 'deploy')

    steps:

      - name: Checkout Repository 👀
        uses: actions/checkout@v4

      - name: Set up QEMU
        uses: docker/setup-qemu-action@v3

      - name: Set up Docker Buildx 
        uses: docker/setup-buildx-action@v3

      - name: Login to Docker Hub 🔐
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
          

      - name: Build and Push Docker Image 🐋
        uses: docker/build-push-action@v5
        with:
          tags: ${{ secrets.DOCKER_USERNAME }}/${{ secrets.REPO_NAME }}:latest
          file: server/Dockerfile
          context: .
          push: true

```

```yaml [deploy.yml]
name: Deploy to EC2 ☁️

on:
  workflow_run:
    workflows: ["Docker Build"]
    types:
      - completed

env:
  EC2_IP_ADDRESS: ${{ secrets.EC2_IP_ADDRESS }}
  EC2_USERNAME: ${{ secrets.EC2_USERNAME }}
  EC2_PEM_KEY: ${{ secrets.EC2_PEM_KEY }}
  REPO_NAME: ${{ secrets.REPO_NAME }}
  DOCKER_USERNAME: ${{ secrets.DOCKER_USERNAME }}
  DOCKER_PASSWORD: ${{ secrets.DOCKER_PASSWORD }}
  ENV_FILE: ${{ secrets.ENV_FILE }}

jobs:
  deploy:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'success' }}

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: SSH KEY 🔑
        run: |
          mkdir -p ~/.ssh
          echo "$EC2_PEM_KEY" > ~/.ssh/id_rsa.pem
          chmod 600 ~/.ssh/id_rsa.pem
          
      - name: Send Docker Compose 🐋
        run: |
          scp -i ~/.ssh/id_rsa.pem -o StrictHostKeyChecking=no -r server/docker-compose.yml $EC2_USERNAME@$EC2_IP_ADDRESS:~/$REPO_NAME-compose

      - name: Docker pull -> up 🐳
        run: |
          ssh -i ~/.ssh/id_rsa.pem -o StrictHostKeyChecking=no $EC2_USERNAME@$EC2_IP_ADDRESS "
            sudo echo '$ENV_FILE' > ~/$REPO_NAME-env &&
            sudo docker login -u $DOCKER_USERNAME -p '$DOCKER_PASSWORD' &&
            sudo docker pull $DOCKER_USERNAME/$REPO_NAME:latest &&
            sudo docker-compose -p $REPO_NAME -f ~/$REPO_NAME-compose up -d
          "
      
      - name: Docker prune 🌳
        run: |
          ssh -i ~/.ssh/id_rsa.pem -o StrictHostKeyChecking=no $EC2_USERNAME@$EC2_IP_ADDRESS "
            sudo docker image prune -a -f
          "
```

:::

::: details 📝 build.yml

> To trigger this workflow, you need to push to the `main` branch with a commit message containing the word `deploy` .

The `build.yml` file contains the instructions to build and push the Docker image to DockerHub. The workflow is triggered on a push event to the `main` branch. It checks if the commit message contains the word `deploy` before running the workflow.

The workflow consists of the following steps:

1. **Checkout Repository**: This step checks out the repository code.

2. **Set up QEMU**: This step sets up QEMU for cross-platform builds.

3. **Set up Docker Buildx**: This step sets up Docker Buildx for building multi-platform images.

4. **Login to Docker Hub**: This step logs in to DockerHub using the Docker login action. It uses the DockerHub username and password stored in GitHub Secrets.

5. **Build and Push Docker Image**: This step builds and pushes the Docker image to DockerHub. It uses the Docker Build and Push action to build the image from the `server/Dockerfile` and push it to DockerHub.

:::

::: details 📝 deploy.yml

> This workflow is triggered when the `Docker Build` workflow is completed successfully.

The `deploy.yml` file contains the instructions to deploy the application to an EC2 instance. The workflow is triggered when the `Docker Build` workflow is completed successfully.

The workflow consists of the following steps:

1. **Checkout Repository**: This step checks out the repository code.

2. **SSH KEY**: This step creates an SSH key file and sets the correct permissions.

3. **Send Docker Compose**: This step copies the `docker-compose.yml` file to the EC2 instance.

4. **Docker pull -> up**: This step logs in to DockerHub on the EC2 instance, pulls the Docker image, and starts the application using `docker-compose`.

5. **Docker prune**: This step cleans up unused Docker images on the EC2 instance.

:::

## Step 2: Configure GitHub Secrets

To securely store sensitive information like your DockerHub credentials and EC2 SSH key, you can use GitHub Secrets. GitHub Secrets allow you to store encrypted variables that can be used in your GitHub Actions workflows.

To configure GitHub Secrets, follow these steps:

1. Go to your GitHub repository and click on `Settings`.

![gh-settings](/images/gh1.png)

2. In the left sidebar, click on `Secrets`.
  + eg. `https://github.com/<username>/<repo>/settings/secrets/actions`

3. Click on `New repository secret`.

![gh-settings](/images/gh2.png)

4. Add the following secrets:
  + `DOCKER_USERNAME`: Your DockerHub username.
  + `DOCKER_PASSWORD`: Your DockerHub Personal Access Token (PAT).
  + `EC2_IP_ADDRESS`: The public IP address of your EC2 instance.
  + `EC2_USERNAME`: The username to SSH into your EC2 instance.
  + `EC2_PEM_KEY`: The private key file used to SSH into your EC2 instance.
  + `REPO_NAME`: The name of your repository.
  + `ENV_FILE`: The name of your environment file (if applicable).

![gh-settings](/images/gh3.png)

::: details 🚨 Common Mistakes with Secrets

* When adding the `EC2_PEM_KEY` secret, make sure to paste the contents of the private key file, not the file path. Also be sure to include the entire contents. Do not add any extra spaces or newlines  
```pem
-----BEGIN RSA PRIVATE KEY-----
gUd+NtBQ5Dbqgmm9tpaTDMkBK/4fE1omFP8eQAmlUvNObbFvSKHrnBO/3kIG9xWg
...
fwcHunQtkbR1y124xcit6ZXdfQBFHPYh80kkbO6WcqnkBXfSEgb9fQ3TeW0937O7
TOixRYXBimh4WerZG08zZMt22YcA/+32D2Bfh23iAMmV4p0sAEzJRt8=
-----END RSA PRIVATE KEY-----
```

* When adding the `DOCKER_PASSWORD` secret, make sure to use your DockerHub Personal Access Token (PAT) and not your DockerHub password.
* Do not share your GitHub Secrets with anyone or store them in your codebase.
* Do not commit your GitHub Secrets to your version control system.
* Do not hardcode your GitHub Secrets in your scripts.
* Make sure your EC2_IP_ADDRESS is the public IP address of your EC2 instance.
* Make sure your EC2_USERNAME is the username you use to SSH into your EC2 instance. This is usually `ubuntu` for Ubuntu instances.
* Make sure your REPO_NAME matches the name of your dockerhub image in the `docker-compose.yml`.

:::


## Step 3: Trigger Deployment

To trigger the deployment of your application, push a commit to the `main` branch with a commit message containing the word `deploy`. This will trigger the `Docker Build` workflow, which will build and push the Docker image to DockerHub. Once the build is successful, the `Deploy to EC2` workflow will be triggered automatically.

```bash
git add .
git commit -m "deploy: build and push docker image"
git push origin main
```

::: details 🚨 Common Deployment Issues

### Problems with build.yml

* When pushing to the `main` branch, make sure your commit message contains the word `deploy`.
* Make sure your DockerHub credentials and EC2 SSH key are correctly configured in GitHub Secrets.
* Make sure your Docker image is successfully built and pushed to DockerHub.
* If the deployment fails, check the logs of the GitHub Actions workflows for any errors.
  - client build errors
    - Make sure your client application is correctly configured and builds successfully.
    - Make sure your client application is in the `client` directory.
    - Make sure your client application has the necessary dependencies installed. Check for optional dependencies that may be missing.
    - Make sure your client application has the correct build script in the `package.json`.
    - Make sure build outputs are going to the correct directory. Check `dist` directory.

::: code-group

```json [client/package.json]
"scripts": {
  "build": "vite build",
},
```

```js [client/vite.config.js]
export default defineConfig({
  build: {
    outDir: 'dist',
  },
})
```


### Problems with deploy.yml

* Make sure your `docker-compose.yml` file is correctly configured and contains the correct image name.
* Make sure your EC2 instance is running and accessible via SSH.
* Make sure your EC2 instance has the necessary permissions to pull the Docker image from DockerHub.
* Make sure your environment file is correctly configured and referenced in the `docker-compose.yml`.
* Make sure the ec2 instance has available storage space for the docker images.

:::
