### Set Up Free SSL Certificates

Cloudflare provides free SSL certificates for all domains added to Cloudflare. SSL certificates encrypt data transmitted between your website and visitors' browsers, enhancing security and privacy. To set up free SSL certificates for your domain.

1. Click on the "SSL/TLS" tab in the Cloudflare dashboard.

![image](/images/image22.png)

2. Configure your SSL settings, including encryption mode, certificate type, and other security options.

* Navigate to SSL/TLS > Overview page
* Change the SSL/TLS encryption mode to  Full (strict) 

![image](/images/image12.png)

* Let Cloudflare auto-redirect all HTTP requests to HTTPS at the DNS servers
* Navigate to SSL/TLS > Edge Certificates page

![image](/images/image64.png)

* Enable Always Use HTTPS

![image](/images/image43.png)

* Create an Origin SSL certificate for HTTPS functionality
* Navigate to SSL/TLS > Origin Server page

![image](/images/image27.png)

* Click on ‘Create Certificate’

![image](/images/image59.png)

* Default values are acceptable, click ‘Create’

![image](/images/image23.png)

* Note the Origin Certificate and Private Key fields - we will be copying these two fields in the next step

![image](/images/image1.png)

> ⚠️ (Keep this page open until everything in this stage is complete)
