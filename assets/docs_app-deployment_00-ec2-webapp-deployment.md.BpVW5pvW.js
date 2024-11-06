import{_ as e,c as t,o as a,a6 as o}from"./chunks/framework.DmJO695r.js";const m=JSON.parse('{"title":"Deploying a Web Application to AWS EC2","description":"","frontmatter":{},"headers":[],"relativePath":"docs/app-deployment/00-ec2-webapp-deployment.md","filePath":"docs/app-deployment/00-ec2-webapp-deployment.md","lastUpdated":1730932831000}'),n={name:"docs/app-deployment/00-ec2-webapp-deployment.md"},i=o('<h1 id="deploying-a-web-application-to-aws-ec2" tabindex="-1">Deploying a Web Application to AWS EC2 <a class="header-anchor" href="#deploying-a-web-application-to-aws-ec2" aria-label="Permalink to &quot;Deploying a Web Application to AWS EC2&quot;">​</a></h1><p><video title="Aws App Deployment Guide" src="https://codeworkslearn.blob.core.windows.net/67055fc0d9284350c2a6c189/aws-classroom.mp4" controls style="height:600px;"></video></p><p>Amazon EC2 is a web service that provides resizable compute capacity in the cloud. It allows you to launch virtual servers, known as instances, on the AWS cloud infrastructure. EC2 instances can be used to run applications, host websites, store data, and a lot more.</p><p>In this guide, we will cover the basic features of launching an EC2 instance using the <a href="https://www.youtube.com/watch?v=42iQKuQodW4" target="_blank" rel="noreferrer">linux</a> distro ubuntu. We also cover how to connect to this server using your command line and a special key file that you will download from aws when setting up your instance.</p><p>We will then cover how to install <a href="https://www.youtube.com/watch?v=Gjnup-PuquQ" target="_blank" rel="noreferrer">docker</a> on this instance how to setup a reverse proxy with <a href="https://www.youtube.com/watch?v=JKxlsvZXG7c" target="_blank" rel="noreferrer">nginx</a>.</p><p>Finally, we will cover how to deploy a web application to this server using <a href="https://www.youtube.com/watch?v=URmeTqglS58" target="_blank" rel="noreferrer">github actions</a> and <a href="https://hub.docker.com/" target="_blank" rel="noreferrer">dockerhub</a>.</p><h2 id="assumptions" tabindex="-1">Assumptions <a class="header-anchor" href="#assumptions" aria-label="Permalink to &quot;Assumptions&quot;">​</a></h2><p>This guide assumes you have the following:</p><ul><li>Using AWS’s Free Tier/Trial opportunities for new &amp; existing accounts</li><li>Utilizing the latest version of <code>bcw</code> (<em>3.5.1 as of this writing</em>) <ul><li>Run <code>npm i -g bcw</code> to globally install the latest version</li></ul></li><li>You have a web application that you want to deploy to an EC2 instance</li><li>You have a basic understanding of web development and the command line</li><li>You have a basic understanding of Git and GitHub</li><li>You have a basic understanding of package managers like npm or yarn</li></ul><blockquote><p>⚠️ NOTES Commands with surrounding <code>&lt; &gt;</code> indicate a variable where you supply the value. Do not include the <code>&lt; &gt;</code> characters.</p></blockquote>',10),s=[i];function l(r,c,p,u,d,h){return a(),t("div",null,s)}const b=e(n,[["render",l]]);export{m as __pageData,b as default};
