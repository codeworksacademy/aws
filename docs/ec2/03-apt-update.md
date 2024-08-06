# Updating the EC2 instance

In this guide, you will learn how to update an EC2 instance with the latest software packages and security updates. Keeping your EC2 instance up-to-date is essential for maintaining the security and performance of your web applications.

## Prerequisites

Before you can update an EC2 instance, you need to have the following:

* An EC2 instance running in your AWS account
* SSH access to your EC2 instance

## Updating an EC2 Instance

Apart from the initial setup, you will need to update your EC2 instance regularly to ensure that it is running the latest software packages and security updates. 

`apt` is the package manager for Ubuntu and other Debian-based Linux distributions. You can use the `apt` command to update the package list and upgrade the installed packages on your EC2 instance.

To update an EC2 instance, follow these steps:

1. Connect to your EC2 instance using SSH. If you need help with this step, refer to the [Connecting to an EC2 Instance](/docs/ec2/02-connecting-to-ec2) guide.

2. Update the package list on your EC2 instance by running the following command:

```bash
sudo apt update
```

3. Upgrade the installed packages on your EC2 instance by running the following command:

```bash
sudo apt upgrade
```

This command will upgrade all the installed packages to their latest versions. It will also remove any obsolete packages that are no longer needed. Expect this process to take some time, depending on the number of packages that need to be upgraded.

4. If prompted, type `Y` and press `Enter` to confirm the upgrade process.

5. After the upgrade process is complete, you may be prompted to restart several services or the EC2 instance itself. Accept the defaults then select ok

![image](/images/image60.png)

6. After the upgrade process is complete, you can check the status of your EC2 instance by running the following command:

```bash
sudo systemctl status
```

This command will show you the status of all the services running on your EC2 instance. You can use this information to troubleshoot any issues that may arise after the upgrade process.

::: details Installing Services with apt

## Installing Additional Services

In addition to updating the software packages on your EC2 instance, you may also want to install additional services or software packages. You can use the `apt` command to install new packages on your EC2 instance.

To install a new package, use the following command:

```bash
sudo apt install package-name
```

Replace `package-name` with the name of the package you want to install. For example, to install the `nginx` web server, you would run the following command:

```bash
sudo apt install nginx
```

After installing a new package, you may need to start or enable the service associated with that package. You can do this by running the following command:

```bash
sudo systemctl start service-name
```

Replace `service-name` with the name of the service you want to start. For example, to start the `nginx` web server, you would run the following command:

```bash
sudo systemctl start nginx
```

You can also enable the service to start automatically when the EC2 instance boots up by running the following command:

```bash
sudo systemctl enable service-name
```

:::
