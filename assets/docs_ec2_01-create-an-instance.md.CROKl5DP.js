import{_ as e,c as i,o as a,a6 as t}from"./chunks/framework.DmJO695r.js";const s="/aws/images/image39.png",n="/aws/images/image28.png",o="/aws/images/image49.png",l="/aws/images/image17.png",r="/aws/images/image34.png",c="/aws/images/image15.png",p="/aws/images/image10.png",d="/aws/images/image35.png",h="/aws/images/image2.png",g="/aws/images/image48.png",u="/aws/images/image54.png",m="/aws/images/image41.png",y="/aws/images/image57.png",k="/aws/images/image20.png",C="/aws/images/image61.png",b="/aws/images/image14.png",T=JSON.parse('{"title":"Creating an EC2 Instance","description":"","frontmatter":{},"headers":[],"relativePath":"docs/ec2/01-create-an-instance.md","filePath":"docs/ec2/01-create-an-instance.md","lastUpdated":1722883279000}'),f={name:"docs/ec2/01-create-an-instance.md"},_=t('<h1 id="creating-an-ec2-instance" tabindex="-1">Creating an EC2 Instance <a class="header-anchor" href="#creating-an-ec2-instance" aria-label="Permalink to &quot;Creating an EC2 Instance&quot;">​</a></h1><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h2><p>Before you can start building and deploying web applications using AWS services, you need to create an EC2 instance. This guide will walk you through the process of creating an EC2 instance and setting up your development environment.</p><h3 id="step-1-create-an-ec2-instance" tabindex="-1">Step 1: Create an EC2 Instance <a class="header-anchor" href="#step-1-create-an-ec2-instance" aria-label="Permalink to &quot;Step 1: Create an EC2 Instance&quot;">​</a></h3><p>To create an EC2 instance, follow these steps:</p><ol><li>Go to the <a href="https://aws.amazon.com/console/" target="_blank" rel="noreferrer">AWS Management Console</a>.</li></ol><ul><li>Check your region in the top-right – eg. (<em>US West (Oregon)</em>)</li></ul><p><img src="'+s+'" alt="image"></p><ol start="2"><li>Click on the <code>Launch Instance</code> button.</li></ol><p><img src="'+n+'" alt="image"></p><p><img src="'+o+'" alt="image"></p><ul><li>Then give your instance a name (eg. <em>MyWebAppServer</em>)</li></ul><p><img src="'+l+'" alt="image"></p><ol start="3"><li>Choose an Amazon Machine Image (AMI) for your instance.</li></ol><ul><li>Select <code>Ubuntu</code> for the <strong>Application and OS Images</strong> option.</li></ul><p><img src="'+r+'" alt="image"></p><p><img src="'+c+'" alt="image"></p><ul><li>Choose the latest LTS version (eg. <em>Ubuntu Server 20.04 LTS</em>)</li><li>[conditional] Consider the preferred architecture to use ( 64-bit : x86 vs ARM)</li><li>Either of the options are fine and neither adversely affect the setup process</li></ul><ol start="4"><li>Choose an instance type.</li></ol><p><img src="'+p+'" alt="image"></p><ul><li>Select the <code>t2.micro</code> | OR | <code>t4g.small</code> under ‘Architecture’ depending on your choice above (<em>stick with the free tiers for now</em>)</li></ul><ol start="5"><li>Configure instance details.</li></ol><ul><li>Key settings to adjust: <ul><li>Number of instances: 1</li><li>Network: Default VPC</li><li>Subnet: No preference</li><li>Auto-assign Public IP: Enable</li></ul></li></ul><ol start="6"><li>Key Pair</li></ol><ul><li>Select and existing or Create a new key pair</li></ul><p><img src="'+d+'" alt="image"></p><p><img src="'+h+'" alt="image"></p><ul><li>Give it a name (eg. <em>MyWebAppServerKeyPair</em>)</li><li>Download the key pair file (*.pem) to your local machine. Put this file in a place you can easily access it.</li><li><strong>This will be your EC2_PEM_KEY and how you remotely log in to manage your server</strong></li><li><strong>Do not lose this file!</strong></li><li><strong>Do not share this file!</strong></li><li><strong>Do not commit this file to GitHub!</strong></li><li>🍎 Mac and Linux machines be sure to run this command: <code>chmod 400 /path/to/your/EC2_PEM_KEY.pem</code></li></ul><ol start="6"><li>Add storage.</li></ol><p><img src="'+g+'" alt="image"></p><ul><li>Keep the default 8 GB storage size or increase it up to 15 GB</li></ul><ol start="7"><li>Add tags.</li></ol><ul><li>Key: <code>Name</code> | Value: <code>MyWebAppServer</code></li></ul><ol start="8"><li>Configure security group.</li></ol><p><img src="'+u+'" alt="image"></p><ul><li>Use existing or Create a new security group</li><li>Key settings to adjust: <ul><li>Security group name: <code>MyWebAppServerSecurityGroup</code></li><li>Description: <code>Allow SSH, HTTP, and HTTPS traffic</code></li></ul></li></ul><p><img src="'+m+'" alt="image"></p><pre><code>- Add rules:\n  - Type: `SSH` | Protocol: `TCP` | Port Range: `22` | Source: `Anywhere`\n  - Type: `HTTP` | Protocol: `TCP` | Port Range: `80` | Source: `Anywhere`\n  - Type: `HTTPS` | Protocol: `TCP` | Port Range: `443` | Source: `Anywhere`\n  - Type: `MYSQL/Aurora` | Protocol: `TCP` | Port Range: `3306` | Source: `Anywhere`\n</code></pre><ol start="9"><li>Review and launch the instance.</li></ol><p><img src="'+y+'" alt="image"></p><ul><li>Click <code>Launch Instance</code> at the bottom of the Summary section on the right to begin the EC2 instance build</li></ul><p><img src="'+k+'" alt="image"></p><ul><li>Click on the instance ID (eg. (i-0a7f04d45f7a684bd))</li></ul><p><img src="'+C+'" alt="image"></p><ul><li>Click on the instance ID again but from the list</li><li>Find the <code>Public IPv4 address</code> under the instance details and keep this handy for future tasks</li></ul><p><img src="'+b+'" alt="image"></p><ul><li><strong>Note:</strong> This will be used in multiple places <ul><li>EC2_IP_ADDRESS GitHub repository secret</li></ul></li></ul><details><summary>Setting up Elastic IP</summary><h3 id="bonus-optional-set-up-a-static-ip-through-ec2-s-elastic-ip" tabindex="-1">Bonus [optional] Set up a static IP through <strong>EC2’s Elastic IP</strong> <a class="header-anchor" href="#bonus-optional-set-up-a-static-ip-through-ec2-s-elastic-ip" aria-label="Permalink to &quot;Bonus [optional] Set up a static IP through **EC2’s Elastic IP**&quot;">​</a></h3><p>On the side menu bar, find <code>Network &amp; Security &gt; Elastic IPs</code></p><p>Click on <code>Allocate Elastic IP address</code></p><ul><li>Verify region match under <code>Network Border Group</code> - eg. <code>us-west-2</code> for Oregon</li><li>Keep default of <code>Amazon’s pool of IPv4 addresses</code></li><li>Click <code>Allocate</code></li></ul><p>With the new ElasticIP entry selected, Click on <code>Actions &gt; Associate Elastic IP address</code></p><p>Click in to <code>Choose an instance</code> and select your EC2 instance</p><ul><li>Click on <code>Associate</code> to finish</li></ul><p>Verify your EC2 instance has the new Elastic IP allocation associated on the <code>Instances</code> panel.</p><h4 id="why-use-elastic-ip" tabindex="-1">Why use Elastic IP? <a class="header-anchor" href="#why-use-elastic-ip" aria-label="Permalink to &quot;Why use Elastic IP?&quot;">​</a></h4><ul><li><p><strong>Static IP Address</strong> - This is a fixed IP address that you can assign to your EC2 instance. This is useful if you need a consistent IP address for your server.</p></li><li><p><strong>Easier DNS Management</strong> - With an Elastic IP, you can easily point your domain name to your EC2 instance without having to update the IP address every time it changes.</p></li><li><p><strong>Improved Security</strong> - By using an Elastic IP, you can restrict access to your EC2 instance to only allow traffic from specific IP addresses.</p></li></ul></details><details><summary>Create and EC2 from the CLI</summary><h3 id="bonus-optional-create-an-ec2-instance-from-the-cli" tabindex="-1">Bonus [optional] Create an EC2 instance from the CLI <a class="header-anchor" href="#bonus-optional-create-an-ec2-instance-from-the-cli" aria-label="Permalink to &quot;Bonus [optional] Create an EC2 instance from the CLI&quot;">​</a></h3><ol><li>Open your terminal and run the following command to create an EC2 instance:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">aws</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ec2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run-instances</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --image-id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ami-0c55b159cbfafe1f0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --instance-type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> t2.micro</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --key-name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MyWebAppServerKeyPair</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --security-group-ids</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sg-0b1f3b3b1c3b1b3b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --subnet-id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> subnet-0b1f3b3b1c3b1b3b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --associate-public-ip-address</span></span></code></pre></div><ol start="2"><li><p>Replace the <code>image-id</code>, <code>key-name</code>, <code>security-group-ids</code>, and <code>subnet-id</code> with your own values.</p></li><li><p>Run the command and your EC2 instance will be created.</p></li><li><p>You can check the status of your instance by running the following command:</p></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">aws</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ec2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> describe-instances</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --instance-ids</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i-0a7f04d45f7a684bd</span></span></code></pre></div><ol start="5"><li>You can also terminate your instance by running the following command:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">aws</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ec2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> terminate-instances</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --instance-ids</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i-0a7f04d45f7a684bd</span></span></code></pre></div></details>',49),F=[_];function E(P,w,S,I,v,B){return a(),i("div",null,F)}const x=e(f,[["render",E]]);export{T as __pageData,x as default};