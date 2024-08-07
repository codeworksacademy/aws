# Configuring Nginx on an EC2 Instance

In this guide, you will learn how to configure Nginx on an EC2 instance. Nginx is a popular web server that is commonly used to host web applications and serve static content.

## Prerequisites

Before you can configure Nginx on an EC2 instance, you need to have the following:

* An EC2 instance running in your AWS account
* Nginx installed on your EC2 instance
* SSH access to your EC2 instance

## Assumptions

* You have a domain name that you want to use to access your web application
* You have an SSL certificate for your domain name
* You have a web application running on your EC2 instance on a specific port

If any of these assumptions are missing, refer to the following guides:

* [Setting up Your Domain with Cloudflare](/docs/cloudflare/00-cloudflare-overview)
* [Connecting Cloudflare SSL Certificates on an EC2 Instance](/docs/cloudflare/01-cloudflare-ssl)
* [Dockerizing and Hosting a Web Application on an EC2 Instance](/docs/app-deployment/01-docker-overview)

## Configuring Nginx

To configure Nginx on an EC2 instance, follow these steps:

1. Connect to your EC2 instance using SSH. If you need help with this step, refer to the [Connecting to an EC2 Instance](/docs/ec2/02-connecting-to-ec2) guide.

2. Navigate to the Nginx configuration directory by running the following command:

```bash
cd /etc/nginx/sites-available
```

3. Create a new configuration file for your web application by running the following command:

```bash
sudo nano mywebapp
```

4. In the Nano text editor, add the following configuration block for your web application: Be sure to replace `<your-domain>`,    `<subdomain>`, and `<APPLICATION_PORT>` with your actual domain name, subdomain, and application port. Take note of the highlighted lines in the code block below for customization.

```nginx
server {
  listen 80;
  listen [::]:80;
  server_name .<your-domain>.com; # [!code focus]

  return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    ssl_certificate /etc/ssl/cert.pem; # [!code focus]
    ssl_certificate_key /etc/ssl/key.pem; # [!code focus]

    server_name <subdomain>.<your-domain>.com; # [!code focus]

    location / {
        proxy_pass http://127.0.0.1:<APPLICATION_PORT>; # [!code focus]
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 86400;
    }
}
```

5. Save and exit the Nano text editor by pressing `Ctrl + X`, then `Y`, and finally `Enter`.

6. Create a symbolic link to enable the new configuration file by running the following command:

```bash
sudo ln -s /etc/nginx/sites-available/mywebapp /etc/nginx/sites-enabled/
```

7. Test the Nginx configuration for syntax errors by running the following command:

```bash
sudo nginx -t
```

8. If there are no syntax errors, reload the Nginx service to apply the new configuration by running the following command:

```bash
sudo systemctl reload nginx
```

## Installing External SSL Certificates

> [First time Domain Setup](/docs/cloudflare/00-cloudflare-overview)

If you are using an external SSL certificate provider, you will need to install the SSL certificate and key on your EC2 instance. You can do this by following these steps:

1. Copy the SSL certificate and key files to your EC2 instance.
  + If you are logged in to your EC2 instance, you can use the `scp` command to copy the files from your local machine to your EC2 instance. Replace `<path-to-cert>` and `<path-to-key>` with
  + Using the `scp` command. Replace `<path-to-cert>` and `<path-to-key>` with the paths to your SSL certificate and key files.

```bash
scp -i <path-to-key-pair> <path-to-cert> ubuntu@<your-ec2-public-ip>:/etc/ssl/cert.pem
scp -i <path-to-key-pair> <path-to-key> ubuntu@<your-ec2-public-ip>:/etc/ssl/key.pem
```

2. Update the SSL certificate and key paths in the Nginx configuration file by editing the file with the `nano` command:

```bash
sudo nano /etc/nginx/sites-available/mywebapp
```

3. Update the `ssl_certificate` and `ssl_certificate_key` lines with the correct paths to your SSL certificate and key files.

4. Save and exit the Nano text editor by pressing `Ctrl + X`, then `Y`, and finally `Enter`.

5. Test the Nginx configuration for syntax errors by running the following command:

```bash
sudo nginx -t
```

![image](/images/image18.png)

Before you can access your web application, you need to configure your domain name to point to your EC2 instance's public IP address. You can do this by updating the DNS records for your domain name in your DNS provider's control panel.

::: details 🥑 Configuring Route 53 for Your Domain
<summary>Configuring Route 53 for Your Domain</summary>

### [optional] Configuring Route 53 for Your Domain

If you are using Amazon Route 53 as your DNS provider instead of cloudflare, you can configure your domain name to point to your EC2 instance by following these steps:

note that you will need to have your domain hosted on Route 53 to follow these steps. You will also need to have an Elastic IP address associated with your EC2 instance. If you don't have an Elastic IP address, you can follow the steps in the [Setting up Elastic IP](/docs/ec2/01-create-an-instance#setting-up-elastic-ip) guide.

You will also need to update the nginx configuration file to use the Elastic IP address and ssl certs.

1. Open the [Route 53 console](https://console.aws.amazon.com/route53/).

2. In the navigation pane, choose `Hosted zones`.

3. Choose the domain name that you want to configure.

4. Choose `Create record`.

5. In the `Create record` dialog box, configure the following settings:

   * **Record name** - Enter the subdomain that you want to use for your web application (e.g., `www` ).
   * **Record type** - Choose `A - IPv4 address` .
   * **Value/Route traffic to** - Choose `Alias to EC2 instance` and select your EC2 instance from the list.

6. Choose `Create records`.

7. Wait for the changes to propagate. You can verify that your domain name is pointing to your EC2 instance by running the following command in your terminal:

```bash
nslookup <subdomain>.<your-domain>.com
```

:::

> Verify that your web application is accessible by visiting `https://<subdomain>.<your-domain>.com` in a web browser. You should see your web application running on your EC2 instance.
