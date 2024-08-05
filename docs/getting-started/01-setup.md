# Creating your AWS Account

## Getting Started

Before you can start building and deploying web applications using AWS services, you need to create an AWS account. This guide will walk you through the process of creating an AWS account and setting up your development environment.

### Step 1: Create an AWS Account

To create an AWS account, follow these steps: [Video Guide](https://www.youtube.com/watch?v=lIdh92JmWtg).

1. Go to the [AWS Management Console](https://aws.amazon.com/console/).
2. Click on the "Create an AWS Account" button.
3. Follow the on-screen instructions to create your account.

![image](/images/image36.png)

<details>
<summary>AWS CLI Instructions</summary>

### Set Up Your Development Environment

Once you have created your AWS account, you need to set up your development environment. Here are some tools you will need:

1. **AWS CLI**: The AWS Command Line Interface (CLI) is a tool that allows you to interact with AWS services from the command line. You can install the AWS CLI by following the instructions [here](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html).

2. **AWS SDKs**: AWS provides SDKs for various programming languages that allow you to interact with AWS services in your applications. You can find the SDKs for your preferred programming language [here](https://aws.amazon.com/tools/).

3. **AWS Management Console**: The AWS Management Console is a web-based interface that allows you to manage your AWS resources. You can access the AWS Management Console by logging in to your AWS account [here](https://aws.amazon.com/console/).

### Configure Your AWS CLI

To configure your AWS CLI, follow these steps:

1. Open a terminal window.
2. Run the following command to configure your AWS CLI:

```bash
aws configure
```

3. Enter your AWS Access Key ID, AWS Secret Access Key, default region, and default output format when prompted.

### Verify Your Setup

To verify that your AWS CLI is set up correctly, run the following command in your terminal:

```bash
aws ec2 describe-instances
```

If you see a list of EC2 instances in your account, your setup is complete.

</details>
