# Configuring Nginx on an EC2 Instance

In this guide, you will learn how to configure Nginx on an EC2 instance. Nginx is a popular web server that is commonly used to host web applications and serve static content.

## Prerequisites

Before you can configure Nginx on an EC2 instance, you need to have the following:

* An EC2 instance running in your AWS account
* Nginx installed on your EC2 instance
* SSH access to your EC2 instance

## Assumptions

* You have a domain name that you want to use to access your web application
* You have Cloudflare set up to manage your domain name and SSL certificates
* You have a web application running on your EC2 instance on a specific port
  - To validate your application is running use the following command 
  - `docker ps` This will let you see the running containers and their ports

If any of these assumptions are missing, refer to the following guides:

* [Setting up Your Domain with Cloudflare](/docs/cloudflare/00-cloudflare-overview)
* [Getting a Free Cloudflare Cert](/docs/cloudflare/01-cloudflare-ssl)
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

4. In the Nano text editor, add the following configuration block for your web application: Be sure to replace `<your-domain>`, `<subdomain>`, and `<APPLICATION_PORT>` with your actual domain name, subdomain, and application port. Take note of the highlighted lines in the code block below for customization.


::: code-group

```nginx [🌟 ssl-enabled]
server {
  listen 80;
  listen [::]:80;
  server_name .<your-domain>.com; # [!code focus]

  return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    # The SSL certificate and key paths
    # create these files or copy them to your EC2 instance
    ssl_certificate /etc/ssl/cert.pem; # [!code focus]
    ssl_certificate_key /etc/ssl/key.pem; # [!code focus]

    # You can support multiple subdomains with additional server blocks
    server_name <subdomain>.<your-domain>.com; # [!code focus]

    location / {
        # Be sure to replace <APPLICATION_PORT> 
        # with the port your application is running on
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

```nginx [http-only 🙁]
# HTTP only configuration
# If you don't have an SSL certificate for your domain yet or you want to use HTTP only
# Start with this configuration and update it later when you have an SSL certificate
server {
  listen 80;
  listen [::]:80;
  server_name <your-domain>.com; # [!code focus]

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

:::


5. Save and exit the Nano text editor by pressing `Ctrl + X`, then `Y`, and finally `Enter`.

6. Create a symbolic link to enable the new configuration file by running the following command:

```bash
sudo ln -s /etc/nginx/sites-available/mywebapp /etc/nginx/sites-enabled/
```

::: details 🚨 Installing the SSL Certificate

### Installing External SSL Certificates

> [First time Domain Setup](/docs/cloudflare/00-cloudflare-overview)

If you are using the `http-only` configuration, you can skip this check and proceed.

If you are using the `ssl-enabled` configuration, you will need to install an SSL certificate on your EC2 instance. You can review how to get a free SSL certificate from Cloudflare in the [Cloudflare SSL Certificate](/docs/cloudflare/01-cloudflare-ssl) guide.

🤷 If you are not using cloudflare and would like to use a different SSL certificate provider I would recommend using [Let's Encrypt](https://letsencrypt.org/). You can follow the [Certbot](https://certbot.eff.org/) guide to install the SSL certificate on your EC2 instance.

1. Copy the SSL certificate and key files to your EC2 instance.
  + If you are logged in to your EC2 instance, you can use create these files using the `nano` command.

```bash
sudo nano /etc/ssl/cert.pem
```
  - Copy and paste the contents of your SSL certificate file into the Nano text editor.
  - Save and exit the Nano text editor by pressing `Ctrl + X`, then `Y`, and finally `Enter`.

```bash
sudo nano /etc/ssl/key.pem
```
  - Copy and paste the contents of your SSL key file into the Nano text editor.
  - Save and exit the Nano text editor by pressing `Ctrl + X`, then `Y`, and finally `Enter`.
:::


7. Test the Nginx configuration for syntax errors by running the following command:

```bash
sudo nginx -t
```

8. If there are no syntax errors, reload the Nginx service to apply the new configuration by running the following command:

```bash
sudo systemctl reload nginx
```

![image](/images/image18.png)

Before you can access your web application, you need to configure your domain name to point to your EC2 instance's public IP address. You can do this by updating the DNS records for your domain name in your DNS provider's control panel.

## Updating DNS Records

To update the DNS records for your domain name, follow these steps:

1. Log in to your DNS provider's control panel.

2. Navigate to the DNS settings for your domain name.

3. Add an `A` record for your subdomain that points to your EC2 instance's public IP address. Be sure to replace `<subdomain>` and `<your-ec2-public-ip>` with your actual subdomain and EC2 instance's public IP address.

```dns
Type: A
Name: <subdomain>
Value: <your-ec2-public-ip>
TTL: Automatic
proxied: true
```

4. Save your changes and wait for the DNS changes to propagate. This process can take up to 24 hours to complete but typically it will work within minutes.

## Testing the Configuration

1. Verify that your web application is accessible by visiting `https://<subdomain>.<your-domain>.com` in a web browser. You should see your web application running on your EC2 instance.

If your web application loads successfully, you have followed the steps correctly. Be sure to test your web application thoroughly to ensure that all features are working as expected. If you are unable to login to your application, you may need to update the available [domain configuration in Auth0](/docs/app-deployment/04-auth0-domain.md) to allow requests from your domain.


2. If you encounter any issues, you can check the Nginx error log for more information by running the following command:

```bash
sudo tail -f /var/log/nginx/error.log
```