# Getting Started with Cloudflare

## Overview

Cloudflare is a web infrastructure and website security company that provides content delivery network (CDN) services, DDoS mitigation, Internet security, and distributed domain name server services. Cloudflare's services help improve website performance, security, and reliability by caching content, protecting against cyber threats, and optimizing traffic routing. 

In this guide, you will learn how to manage domains with Cloudflare, customize your DNS settings, set up free SSL certificates, and more.

## Prerequisites

Before you get started, you will need the following:

* A Cloudflare account
* A domain name that you want to manage with Cloudflare
* Access to your domain registrar's DNS settings

## Getting Started

### Step 1: Create a Cloudflare Account

If you don't already have a Cloudflare account, you can create one by visiting the [Cloudflare website](https://www.cloudflare.com/) and signing up for an account. You will need to provide your email address and create a password to create an account.

<details>
<summary>Existing Domain</summary>

### Add Your Domain to Cloudflare

Once you have created a Cloudflare account, you can add your domain to Cloudflare by following these steps:

1. Log in to your Cloudflare account.
2. Click on the "Add a Site" button in the Cloudflare dashboard.
3. Enter your domain name in the "Enter your domain" field and click the "Add Site" button.
4. Cloudflare will scan your domain's DNS records and display them in the Cloudflare dashboard. Review the DNS records and click the "Continue" button to proceed.

### Update Your Domain's Nameservers

After adding your domain to Cloudflare, you will need to update your domain's nameservers to point to Cloudflare's nameservers. To do this, follow these steps:

1. Log in to your domain registrar's website.
2. Navigate to the DNS settings for your domain.

> The location of the DNS settings may vary depending on your domain registrar. Look for an option to manage your domain's nameservers or DNS settings.

3. Update your domain's nameservers to the nameservers provided by Cloudflare. Cloudflare will display the nameservers you need to use in the Cloudflare dashboard.

4. Save your changes and wait for the DNS changes to propagate. This process can take up to 24 hours to complete.
</details>

If you don't have an existing domain, you can register a new domain through Cloudflare by following these steps:

<details>
<summary>New Domain</summary>

### Register a New Domain

1. Log in to your Cloudflare account.
2. Click on the "Register a Domain" button in the Cloudflare dashboard.
3. Enter the domain name you want to register and click the "Search" button to check domain availability.
4. If the domain is available, follow the prompts to complete the domain registration process.

> Note: Domain registration fees may apply. Cloudflare offers domain registration services in addition to DNS management and security services.

5. Once your domain is registered, you can manage it through the Cloudflare dashboard.
</details>

### Step 2: Customize Your DNS Settings

After adding your domain to Cloudflare, you can customize your DNS settings to optimize your website's performance and security. Cloudflare provides a range of DNS management features, including:

* A records: Map domain names to IPv4 addresses
* AAAA records: Map domain names to IPv6 addresses
* CNAME records: Create aliases for domain names
* MX records: Configure mail servers for your domain
* TXT records: Add text records for verification or other purposes

To customize your DNS settings in Cloudflare, follow these steps:

![image](/images/image8.png)

1. Navigate to the "DNS" tab in the Cloudflare dashboard.

![image](/images/image51.png)

2. Add new DNS records or edit existing records to configure your domain's DNS settings.

![image](/images/image46.png)

![image](/images/image9.png)

> Note: The name field for `A` records is tied to the subdomain for the site you are managing. The value field should be the IP address of the server hosting the website eg. (*ec2 ip-address*).

![image](/images/image33.png)

3. Save your changes and wait for the DNS changes to propagate. Changes to DNS records can take anywhere from 5 minutes to 24 hours to take effect. You can use tools like `dig` or `nslookup` to verify that your DNS records are configured correctly.
