# Connecting to an EC2 Instance

In this guide, you will learn how to connect to an EC2 instance using SSH. This is a crucial step in managing your EC2 instance and deploying web applications.

## Prerequisites

Before you can connect to an EC2 instance, you need to have the following:

* An EC2 instance running in your AWS account
* The public IP address or DNS name of your EC2 instance
* The private key pair associated with your EC2 instance

## Connecting to an EC2 Instance

To connect to an EC2 instance, follow these steps:

1. Open a terminal window on your local machine.

2. Use the `ssh` command to connect to your EC2 instance. Replace `your-ec2-public-ip` with the public IP address of your EC2 instance and `your-key-pair.pem` with the path to your private key pair file.

> 🍎 **Note:** The private key pair file should have the correct permissions set. You can set the correct permissions by running `chmod 400 your-key-pair.pem` .

```bash
ssh -i your-key-pair.pem ubuntu@your-ec2-public-ip
```

For example:

```bash
ssh -i MyWebAppServerKeyPair.pem ubuntu@54.149.123.456
```

3. If this is your first time connecting to the EC2 instance, you may see a message like this:

   

```bash
The authenticity of host 'your-ec2-public-ip' can't be established.
ECDSA key fingerprint is SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.

Are you sure you want to continue connecting (yes/no)?
```

Type `yes` and press `Enter` to continue.

4. You should now be connected to your EC2 instance. You will see a command prompt that looks like this:

```bash
ubuntu@ip-172-31-12-34:~$
```

You can now run commands on your EC2 instance just like you would on your local machine.

## First Time Connection Troubleshooting

If you are having trouble connecting to your EC2 instance for the first time, here are some common issues and solutions:

* **Permission Denied (Public Key)** - If you see a `Permission denied (publickey)` error, make sure you are using the correct private key pair file and that the file has the correct permissions set.

* **Connection Timeout** - If you are unable to connect to your EC2 instance and see a `Connection timed out` error, check that the security group associated with your EC2 instance allows inbound SSH traffic on port 22.

* **Incorrect IP Address** - If you are unable to connect to your EC2 instance and see a `Name or service not known` error, double-check the public IP address or DNS name of your EC2 instance.