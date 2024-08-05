# Hosting the default nginx Website on EC2

In this guide, you will learn how to host a web application on an EC2 instance. This is a crucial step in deploying your web application to the public internet.

## Prerequisites

Before you can host a web application on an EC2 instance, you need to have the following:

* An EC2 instance running in your AWS account
* A web application that you want to host on the EC2 instance
* SSH access to your EC2 instance

## Setting up the EC2 Instance

Before you can host a web application on an EC2 instance, you need to set up the instance with the necessary software and configurations. In this guide, we will install, configure and use Docker and Nginx.

Before using apt, always remember to update the package list by running the following command:

```bash
sudo apt update
```

1. Connect to your EC2 instance using SSH. If you need help with this step, refer to the [Connecting to an EC2 Instance](/docs/ec2/02-connecting-to-ec2) guide.
2. Install Docker on your EC2 instance by running the following commands:

```bash
sudo snap install docker
```

> Snap is similar to apt and is used to manage installed software on your server. 
> You can learn more about Snap [here](https://snapcraft.io/). 
> If you don't have snap installed, you can install it by running `sudo apt install snapd` .

3. Install Nginx on your EC2 instance by running the following command:

```bash
sudo apt install nginx
```

4. Start the Nginx service by running the following command:

```bash
sudo systemctl start nginx
```

5. Verify that Nginx is running by visiting your EC2 instance's public IP address in a web browser. You should see the default Nginx welcome page.

![nginx-welcome-page](/images/image69.png)
