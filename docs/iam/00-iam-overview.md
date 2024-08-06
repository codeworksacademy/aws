# Creating an IAM User in AWS

## Introduction

An IAM (Identity and Access Management) user in AWS is a security best practice that allows you to manage access to your AWS resources securely. Instead of using the root user for daily tasks, which has full access to all resources, creating IAM users with limited permissions minimizes security risks.

## Why Use IAM Users?

* **Security:** Reduces the risk of accidental changes or deletions to your AWS environment.
* **Access Control:** Provides granular control over who can access specific resources.
* **Audit:** Allows tracking and auditing of actions performed by individual users.

## Steps to Create an IAM User

### Step 1: Log in to AWS Management Console

1. Go to the [AWS Management Console](https://aws.amazon.com/console/).
2. Log in using your root user credentials.

![console](/images/iam2.png)

### Step 2: Navigate to IAM

1. In the AWS Management Console, search for `IAM` in the services search bar.
2. Click on `IAM` to open the IAM Dashboard.

![console](/images/iam4.png)

### Step 3: Create a New User

1. In the IAM Dashboard, click on `Users` in the sidebar.

![console](/images/iam5.png)

2. Click the `Add user` button.

![console](/images/iam6.png)

### Step 4: Set User Details

1. Enter a user name.
2. Select the "Access type":
   - **Programmatic access:** Provides access via the AWS CLI, SDK, and API.
   - **AWS Management Console access:** Provides access via the AWS Management Console.
3. Set a custom password if choosing console access.

![console](/images/iam7.png)

### Step 5: Set Permissions

![console](/images/iam8.png)

1. **Attach existing policies directly:** Choose predefined policies like `AmazonS3FullAccess`.
2. **Add user to group:** Create or add the user to a group with specific permissions.
3. **Copy permissions from existing user:** Copy permissions from another IAM user.
4. **Attach customer managed policies:** Attach policies you have created.

![console](/images/iam9.png)

### Step 6: Add Tags (Optional)

1. Add key-value pairs for identification, such as department or project.

### Step 7: Review and Create

1. Review the details and permissions assigned to the user.
2. Click "Create user."
3. After creation, you can view the user's access key ID and secret access key.

![console](/images/iam10.png)

### Step 8: Download Credentials

![console](/images/iam11.png)

1. Create an access key for the user.
1. Download the CSV file containing the user’s access key ID and secret access key.

![console](/images/iam12.png)

**Important:** This is the only time the secret access key will be available. Store it securely.

## Best Practices

* **Least Privilege Principle:** Grant only the permissions necessary for the user to perform their tasks.
* **MFA:** Enable Multi-Factor Authentication for an added layer of security.
* **Rotate Credentials:** Regularly rotate access keys and passwords.
* **Use IAM Roles:** For applications running on AWS services (e.g., EC2), use IAM roles instead of IAM users.

## Example Custom Policy

For more fine-grained control, create a custom policy:

```json
{

    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket",
                "s3:GetObject",
                "s3:PutObject",
                "s3:DeleteObject"
            ],
            "Resource": [
                "arn:aws:s3:::your-bucket-name",
                "arn:aws:s3:::your-bucket-name/*"
            ]
        }
    ]
}
```

## Conclusion

By creating IAM users with limited permissions, you enhance the security of your AWS environment. Follow best practices to ensure your resources are well-protected and access is controlled effectively.

For more detailed instructions, visit the [AWS IAM documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html).

::: tip **Pro Tip:** Create a daily use IAM user for your AWS account. 
The root user should only be used for administrative tasks, such as billing and account management. Avoid using the root user even if you are the account owner. 
:::
