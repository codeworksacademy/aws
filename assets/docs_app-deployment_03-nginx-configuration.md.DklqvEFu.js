import{_ as s,c as i,o as a,a6 as n}from"./chunks/framework.DmJO695r.js";const e="/aws/images/image18.png",y=JSON.parse('{"title":"Configuring Nginx on an EC2 Instance","description":"","frontmatter":{},"headers":[],"relativePath":"docs/app-deployment/03-nginx-configuration.md","filePath":"docs/app-deployment/03-nginx-configuration.md","lastUpdated":1730932261000}'),t={name:"docs/app-deployment/03-nginx-configuration.md"},l=n(`<h1 id="configuring-nginx-on-an-ec2-instance" tabindex="-1">Configuring Nginx on an EC2 Instance <a class="header-anchor" href="#configuring-nginx-on-an-ec2-instance" aria-label="Permalink to &quot;Configuring Nginx on an EC2 Instance&quot;">​</a></h1><p>In this guide, you will learn how to configure Nginx on an EC2 instance. Nginx is a popular web server that is commonly used to host web applications and serve static content.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>Before you can configure Nginx on an EC2 instance, you need to have the following:</p><ul><li>An EC2 instance running in your AWS account</li><li>Nginx installed on your EC2 instance</li><li>SSH access to your EC2 instance</li></ul><h2 id="assumptions" tabindex="-1">Assumptions <a class="header-anchor" href="#assumptions" aria-label="Permalink to &quot;Assumptions&quot;">​</a></h2><ul><li>You have a domain name that you want to use to access your web application</li><li>You have Cloudflare set up to manage your domain name and SSL certificates</li><li>You have a web application running on your EC2 instance on a specific port <ul><li>To validate your application is running use the following command</li><li><code>docker ps</code> This will let you see the running containers and their ports</li></ul></li></ul><p>If any of these assumptions are missing, refer to the following guides:</p><ul><li><a href="/aws/docs/cloudflare/00-cloudflare-overview.html">Setting up Your Domain with Cloudflare</a></li><li><a href="/aws/docs/cloudflare/01-cloudflare-ssl.html">Getting a Free Cloudflare Cert</a></li><li><a href="/aws/docs/app-deployment/01-docker-overview.html">Dockerizing and Hosting a Web Application on an EC2 Instance</a></li></ul><h2 id="configuring-nginx" tabindex="-1">Configuring Nginx <a class="header-anchor" href="#configuring-nginx" aria-label="Permalink to &quot;Configuring Nginx&quot;">​</a></h2><p>To configure Nginx on an EC2 instance, follow these steps:</p><ol><li><p>Connect to your EC2 instance using SSH. If you need help with this step, refer to the <a href="/aws/docs/ec2/02-connecting-to-ec2.html">Connecting to an EC2 Instance</a> guide.</p></li><li><p>Navigate to the Nginx configuration directory by running the following command:</p></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/nginx/sites-available</span></span></code></pre></div><ol start="3"><li>Create a new configuration file for your web application by running the following command:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nano</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mywebapp</span></span></code></pre></div><ol start="4"><li>In the Nano text editor, add the following configuration block for your web application: Be sure to replace <code>&lt;your-domain&gt;</code>, <code>&lt;subdomain&gt;</code>, and <code>&lt;APPLICATION_PORT&gt;</code> with your actual domain name, subdomain, and application port. Take note of the highlighted lines in the code block below for customization.</li></ol><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-um-IB" id="tab-WtIvcB3" checked><label for="tab-WtIvcB3">🌟 ssl-enabled</label><input type="radio" name="group-um-IB" id="tab-cN1LIGM"><label for="tab-cN1LIGM">http-only 🙁</label></div><div class="blocks"><div class="language-nginx vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  listen </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[::]:80;</span></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.&lt;your-domain&gt;.com; </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 301</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> https://$server_name$request_uri;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">443</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ssl http2;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    listen </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[::]:443 ssl http2;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The SSL certificate and key paths</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # create these files or copy them to your EC2 instance</span></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ssl_certificate </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/etc/ssl/cert.pem; </span></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    ssl_certificate_key </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/etc/ssl/key.pem; </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # You can support multiple subdomains with additional server blocks</span></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;subdomain&gt;.&lt;your-domain&gt;.com; </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # Be sure to replace &lt;APPLICATION_PORT&gt; </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # with the port your application is running on</span></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://127.0.0.1:&lt;APPLICATION_PORT&gt;; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_http_version </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Upgrade $http_upgrade;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Connection </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;upgrade&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_read_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">86400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># HTTP only configuration</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># If you don&#39;t have an SSL certificate for your domain yet or you want to use HTTP only</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Start with this configuration and update it later when you have an SSL certificate</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  listen </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[::]:80;</span></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;your-domain&gt;.com; </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://127.0.0.1:&lt;APPLICATION_PORT&gt;; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_http_version </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Upgrade $http_upgrade;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Connection </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;upgrade&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Host $host;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_set_header </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">X-Forwarded-Proto $scheme;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        proxy_read_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">86400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><ol start="5"><li><p>Save and exit the Nano text editor by pressing <code>Ctrl + X</code>, then <code>Y</code>, and finally <code>Enter</code>.</p></li><li><p>Create a symbolic link to enable the new configuration file by running the following command:</p></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/nginx/sites-available/mywebapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/nginx/sites-enabled/</span></span></code></pre></div><details class="details custom-block"><summary>🚨 Installing the SSL Certificate</summary><h3 id="installing-external-ssl-certificates" tabindex="-1">Installing External SSL Certificates <a class="header-anchor" href="#installing-external-ssl-certificates" aria-label="Permalink to &quot;Installing External SSL Certificates&quot;">​</a></h3><blockquote><p><a href="/aws/docs/cloudflare/00-cloudflare-overview.html">First time Domain Setup</a></p></blockquote><p>If you are using the <code>http-only</code> configuration, you can skip this check and proceed.</p><p>If you are using the <code>ssl-enabled</code> configuration, you will need to install an SSL certificate on your EC2 instance. You can review how to get a free SSL certificate from Cloudflare in the <a href="/aws/docs/cloudflare/01-cloudflare-ssl.html">Cloudflare SSL Certificate</a> guide.</p><p>🤷 If you are not using cloudflare and would like to use a different SSL certificate provider I would recommend using <a href="https://letsencrypt.org/" target="_blank" rel="noreferrer">Let&#39;s Encrypt</a>. You can follow the <a href="https://certbot.eff.org/" target="_blank" rel="noreferrer">Certbot</a> guide to install the SSL certificate on your EC2 instance.</p><ol><li>Copy the SSL certificate and key files to your EC2 instance.</li></ol><ul><li>If you are logged in to your EC2 instance, you can use create these files using the <code>nano</code> command.</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nano</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/ssl/cert.pem</span></span></code></pre></div><ul><li>Copy and paste the contents of your SSL certificate file into the Nano text editor.</li><li>Save and exit the Nano text editor by pressing <code>Ctrl + X</code>, then <code>Y</code>, and finally <code>Enter</code>.</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nano</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/ssl/key.pem</span></span></code></pre></div><ul><li>Copy and paste the contents of your SSL key file into the Nano text editor.</li><li>Save and exit the Nano text editor by pressing <code>Ctrl + X</code>, then <code>Y</code>, and finally <code>Enter</code>.</li></ul></details><ol start="7"><li>Test the Nginx configuration for syntax errors by running the following command:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span></span></code></pre></div><ol start="8"><li>If there are no syntax errors, reload the Nginx service to apply the new configuration by running the following command:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre></div><p><img src="`+e+`" alt="image"></p><p>Before you can access your web application, you need to configure your domain name to point to your EC2 instance&#39;s public IP address. You can do this by updating the DNS records for your domain name in your DNS provider&#39;s control panel.</p><h2 id="updating-dns-records" tabindex="-1">Updating DNS Records <a class="header-anchor" href="#updating-dns-records" aria-label="Permalink to &quot;Updating DNS Records&quot;">​</a></h2><p>To update the DNS records for your domain name, follow these steps:</p><ol><li><p>Log in to your DNS provider&#39;s control panel.</p></li><li><p>Navigate to the DNS settings for your domain name.</p></li><li><p>Add an <code>A</code> record for your subdomain that points to your EC2 instance&#39;s public IP address. Be sure to replace <code>&lt;subdomain&gt;</code> and <code>&lt;your-ec2-public-ip&gt;</code> with your actual subdomain and EC2 instance&#39;s public IP address.</p></li></ol><div class="language-dns vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dns</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Type: A</span></span>
<span class="line"><span>Name: &lt;subdomain&gt;</span></span>
<span class="line"><span>Value: &lt;your-ec2-public-ip&gt;</span></span>
<span class="line"><span>TTL: Automatic</span></span>
<span class="line"><span>proxied: true</span></span></code></pre></div><ol start="4"><li>Save your changes and wait for the DNS changes to propagate. This process can take up to 24 hours to complete but typically it will work within minutes.</li></ol><h2 id="testing-the-configuration" tabindex="-1">Testing the Configuration <a class="header-anchor" href="#testing-the-configuration" aria-label="Permalink to &quot;Testing the Configuration&quot;">​</a></h2><ol><li>Verify that your web application is accessible by visiting <code>https://&lt;subdomain&gt;.&lt;your-domain&gt;.com</code> in a web browser. You should see your web application running on your EC2 instance.</li></ol><p>If your web application loads successfully, you have followed the steps correctly. Be sure to test your web application thoroughly to ensure that all features are working as expected. If you are unable to login to your application, you may need to update the available <a href="/aws/docs/app-deployment/04-auth0-domain.html">domain configuration in Auth0</a> to allow requests from your domain.</p><ol start="2"><li>If you encounter any issues, you can check the Nginx error log for more information by running the following command:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tail</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/log/nginx/error.log</span></span></code></pre></div>`,36),o=[l];function p(h,r,d,c,k,g){return a(),i("div",null,o)}const E=s(t,[["render",p]]);export{y as __pageData,E as default};