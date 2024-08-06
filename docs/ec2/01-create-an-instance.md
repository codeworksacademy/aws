# Creating an EC2 Instance

## Getting Started

Before you can start building and deploying web applications using AWS services, you need to create an EC2 instance. This guide will walk you through the process of creating an EC2 instance and setting up your development environment.

### Step 1: Create an EC2 Instance

To create an EC2 instance, follow these steps: 

1. Go to the [AWS Management Console](https://aws.amazon.com/console/).
  + Check your region in the top-right – eg. (*US West (Oregon)*) 

![image](/images/image39.png)

2. Click on the `Launch Instance` button.
  

![image](/images/image28.png)

  

![image](/images/image49.png)

  + Then give your instance a name (eg. *MyWebAppServer*)
  

![image](/images/image17.png)

3. Choose an Amazon Machine Image (AMI) for your instance.
  + Select `Ubuntu` for the **Application and OS Images** option.
  

![image](/images/image34.png)

![image](/images/image15.png)

  + Choose the latest LTS version (eg. *Ubuntu Server 20.04 LTS*)
  + [conditional] Consider the preferred architecture to use ( 64-bit : x86 vs ARM) 
  + Either of the options are fine and neither adversely affect the setup process

4. Choose an instance type.

![image](/images/image10.png)

  + Select the `t2.micro` | OR | `t4g.small` under ‘Architecture’ depending on your choice above (*stick with the free tiers for now*)
5. Configure instance details.
  + Key settings to adjust:
    - Number of instances: 1
    - Network: Default VPC
    - Subnet: No preference
    - Auto-assign Public IP: Enable
6. Key Pair
  + Select and existing or Create a new key pair

![image](/images/image35.png)

![image](/images/image2.png)

  + Give it a name (eg. *MyWebAppServerKeyPair*)
  + Download the key pair file (*.pem) to your local machine. Put this file in a place you can easily access it.
  + **This will be your EC2_PEM_KEY and how you remotely log in to manage your server**
  + **Do not lose this file!**
  + **Do not share this file!**
  + **Do not commit this file to GitHub!**
  + 🍎 Mac and Linux machines be sure to run this command: `chmod 400 /path/to/your/EC2_PEM_KEY.pem`
6. Add storage.
  

![image](/images/image48.png)

  + Keep the default 8 GB storage size or increase it up to 15 GB
7. Add tags.
  + Key: `Name` | Value: `MyWebAppServer`
8. Configure security group.
  

![image](/images/image54.png)

  + Use existing or Create a new security group
  + Key settings to adjust:
    - Security group name: `MyWebAppServerSecurityGroup`
    - Description: `Allow SSH, HTTP, and HTTPS traffic`

![image](/images/image41.png)

    - Add rules:
      - Type: `SSH` | Protocol: `TCP` | Port Range: `22` | Source: `Anywhere`
      - Type: `HTTP` | Protocol: `TCP` | Port Range: `80` | Source: `Anywhere`
      - Type: `HTTPS` | Protocol: `TCP` | Port Range: `443` | Source: `Anywhere`
      - Type: `MYSQL/Aurora` | Protocol: `TCP` | Port Range: `3306` | Source: `Anywhere`
9. Review and launch the instance.

![image](/images/image57.png)

  + Click `Launch Instance` at the bottom of the Summary section on the right to begin the EC2 instance build

![image](/images/image20.png)

  + Click on the instance ID (eg. (i-0a7f04d45f7a684bd))

![image](/images/image61.png)

  + Click on the instance ID again but from the list
  + Find the `Public IPv4 address` under the instance details and keep this handy for future tasks

![image](/images/image14.png)

* **Note:** This will be used in multiple places
  + EC2_IP_ADDRESS GitHub repository secret

::: details 🥑 Setting up Elastic IP

### Bonus [optional] Set up a static IP through **EC2’s Elastic IP**

On the side menu bar, find `Network & Security > Elastic IPs`

Click on `Allocate Elastic IP address`

  + Verify region match under `Network Border Group` - eg. `us-west-2` for Oregon
  + Keep default of `Amazon’s pool of IPv4 addresses`
  + Click `Allocate`

With the new ElasticIP entry selected, Click on `Actions > Associate Elastic IP address`

Click in to `Choose an instance` and select your EC2 instance
  + Click on `Associate` to finish

Verify your EC2 instance has the new Elastic IP allocation associated on the `Instances` panel. 

#### Why use Elastic IP?

* **Static IP Address** - This is a fixed IP address that you can assign to your EC2 instance. This is useful if you need a consistent IP address for your server.

* **Easier DNS Management** - With an Elastic IP, you can easily point your domain name to your EC2 instance without having to update the IP address every time it changes.

* **Improved Security** - By using an Elastic IP, you can restrict access to your EC2 instance to only allow traffic from specific IP addresses.

:::

::: details 🥑 Create and EC2 from the CLI

### Bonus [optional] Create an EC2 instance from the CLI

1. Open your terminal and run the following command to create an EC2 instance:

```bash
aws ec2 run-instances --image-id ami-0c55b159cbfafe1f0 --instance-type t2.micro --key-name MyWebAppServerKeyPair --security-group-ids sg-0b1f3b3b1c3b1b3b --subnet-id subnet-0b1f3b3b1c3b1b3b --associate-public-ip-address
```

2. Replace the `image-id`,      `key-name`,      `security-group-ids`, and `subnet-id` with your own values.

3. Run the command and your EC2 instance will be created.

4. You can check the status of your instance by running the following command:

```bash
aws ec2 describe-instances --instance-ids i-0a7f04d45f7a684bd
```

5. You can also terminate your instance by running the following command:

```bash
aws ec2 terminate-instances --instance-ids i-0a7f04d45f7a684bd
```

:::
