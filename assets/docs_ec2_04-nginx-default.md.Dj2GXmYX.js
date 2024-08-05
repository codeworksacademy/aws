import{_ as e,c as a,o as i,a6 as s}from"./chunks/framework.DmJO695r.js";const t="/aws/images/image69.png",b=JSON.parse('{"title":"Hosting the default nginx Website on EC2","description":"","frontmatter":{},"headers":[],"relativePath":"docs/ec2/04-nginx-default.md","filePath":"docs/ec2/04-nginx-default.md","lastUpdated":1722883279000}'),n={name:"docs/ec2/04-nginx-default.md"},o=s('<h1 id="hosting-the-default-nginx-website-on-ec2" tabindex="-1">Hosting the default nginx Website on EC2 <a class="header-anchor" href="#hosting-the-default-nginx-website-on-ec2" aria-label="Permalink to &quot;Hosting the default nginx Website on EC2&quot;">​</a></h1><p>In this guide, you will learn how to host a web application on an EC2 instance. This is a crucial step in deploying your web application to the public internet.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>Before you can host a web application on an EC2 instance, you need to have the following:</p><ul><li>An EC2 instance running in your AWS account</li><li>A web application that you want to host on the EC2 instance</li><li>SSH access to your EC2 instance</li></ul><h2 id="setting-up-the-ec2-instance" tabindex="-1">Setting up the EC2 Instance <a class="header-anchor" href="#setting-up-the-ec2-instance" aria-label="Permalink to &quot;Setting up the EC2 Instance&quot;">​</a></h2><p>Before you can host a web application on an EC2 instance, you need to set up the instance with the necessary software and configurations. In this guide, we will install, configure and use Docker and Nginx.</p><p>Before using apt, always remember to update the package list by running the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span></code></pre></div><ol><li>Connect to your EC2 instance using SSH. If you need help with this step, refer to the <a href="/aws/docs/ec2/02-connecting-to-ec2.html">Connecting to an EC2 Instance</a> guide.</li><li>Install Docker on your EC2 instance by running the following commands:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> snap</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span></span></code></pre></div><blockquote><p>Snap is similar to apt and is used to manage installed software on your server. You can learn more about Snap <a href="https://snapcraft.io/" target="_blank" rel="noreferrer">here</a>. If you don&#39;t have snap installed, you can install it by running <code>sudo apt install snapd</code> .</p></blockquote><ol start="3"><li>Install Nginx on your EC2 instance by running the following command:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre></div><ol start="4"><li>Start the Nginx service by running the following command:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre></div><ol start="5"><li>Verify that Nginx is running by visiting your EC2 instance&#39;s public IP address in a web browser. You should see the default Nginx welcome page.</li></ol><p><img src="'+t+'" alt="nginx-welcome-page"></p>',18),l=[o];function h(p,c,r,d,u,g){return i(),a("div",null,l)}const y=e(n,[["render",h]]);export{b as __pageData,y as default};
