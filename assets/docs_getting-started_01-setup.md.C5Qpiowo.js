import{_ as e,c as t,o as a,a6 as o}from"./chunks/framework.DmJO695r.js";const n="/aws/images/image36.png",y=JSON.parse('{"title":"Creating your AWS Account","description":"","frontmatter":{},"headers":[],"relativePath":"docs/getting-started/01-setup.md","filePath":"docs/getting-started/01-setup.md","lastUpdated":1723072404000}'),r={name:"docs/getting-started/01-setup.md"},s=o('<h1 id="creating-your-aws-account" tabindex="-1">Creating your AWS Account <a class="header-anchor" href="#creating-your-aws-account" aria-label="Permalink to &quot;Creating your AWS Account&quot;">​</a></h1><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h2><p>Before you can start building and deploying web applications using AWS services, you need to create an AWS account. This guide will walk you through the process of creating an AWS account and setting up your development environment.</p><h3 id="step-1-create-an-aws-account" tabindex="-1">Step 1: Create an AWS Account <a class="header-anchor" href="#step-1-create-an-aws-account" aria-label="Permalink to &quot;Step 1: Create an AWS Account&quot;">​</a></h3><p>To create an AWS account, follow these steps: <a href="https://www.youtube.com/watch?v=lIdh92JmWtg" target="_blank" rel="noreferrer">Video Guide</a>.</p><ol><li>Go to the <a href="https://aws.amazon.com/console/" target="_blank" rel="noreferrer">AWS Management Console</a>.</li><li>Click on the &quot;Create an AWS Account&quot; button.</li><li>Follow the on-screen instructions to create your account.</li></ol><p><img src="'+n+'" alt="image"></p><details class="details custom-block"><summary>🥑 AWS CLI Instructions</summary><h3 id="set-up-your-development-environment" tabindex="-1">Set Up Your Development Environment <a class="header-anchor" href="#set-up-your-development-environment" aria-label="Permalink to &quot;Set Up Your Development Environment&quot;">​</a></h3><p>Once you have created your AWS account, you need to set up your development environment. Here are some tools you will need:</p><ol><li><p><strong>AWS CLI</strong>: The AWS Command Line Interface (CLI) is a tool that allows you to interact with AWS services from the command line. You can install the AWS CLI by following the instructions <a href="https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html" target="_blank" rel="noreferrer">here</a>.</p></li><li><p><strong>AWS SDKs</strong>: AWS provides SDKs for various programming languages that allow you to interact with AWS services in your applications. You can find the SDKs for your preferred programming language <a href="https://aws.amazon.com/tools/" target="_blank" rel="noreferrer">here</a>.</p></li><li><p><strong>AWS Management Console</strong>: The AWS Management Console is a web-based interface that allows you to manage your AWS resources. You can access the AWS Management Console by logging in to your AWS account <a href="https://aws.amazon.com/console/" target="_blank" rel="noreferrer">here</a>.</p></li></ol><h3 id="configure-your-aws-cli" tabindex="-1">Configure Your AWS CLI <a class="header-anchor" href="#configure-your-aws-cli" aria-label="Permalink to &quot;Configure Your AWS CLI&quot;">​</a></h3><p>To configure your AWS CLI, follow these steps:</p><ol><li>Open a terminal window.</li><li>Run the following command to configure your AWS CLI:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">aws</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> configure</span></span></code></pre></div><ol start="3"><li>Enter your AWS Access Key ID, AWS Secret Access Key, default region, and default output format when prompted.</li></ol><h3 id="verify-your-setup" tabindex="-1">Verify Your Setup <a class="header-anchor" href="#verify-your-setup" aria-label="Permalink to &quot;Verify Your Setup&quot;">​</a></h3><p>To verify that your AWS CLI is set up correctly, run the following command in your terminal:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">aws</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ec2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> describe-instances</span></span></code></pre></div><p>If you see a list of EC2 instances in your account, your setup is complete.</p></details>',8),i=[s];function l(c,u,p,h,d,g){return a(),t("div",null,i)}const f=e(r,[["render",l]]);export{y as __pageData,f as default};