# Deploying a Web Application to AWS EC2

<video title="Aws App Deployment Guide" src="https://codeworkslearn.blob.core.windows.net/67055fc0d9284350c2a6c189/aws-classroom.mp4" controls style="height: 600px;" poster="https://sandbox.codeworksacademy.com/api/posters/cw?text=AWS App Deployment"></video>

Amazon EC2 is a web service that provides resizable compute capacity in the cloud. It allows you to launch virtual servers, known as instances, on the AWS cloud infrastructure. EC2 instances can be used to run applications, host websites, store data, and a lot more.

In this guide, we will cover the basic features of launching an EC2 instance using the [linux](https://www.youtube.com/watch?v=42iQKuQodW4) distro ubuntu. We also cover how to connect to this server using your command line and a special key file that you will download from aws when setting up your instance. 

We will then cover how to install [docker](https://www.youtube.com/watch?v=Gjnup-PuquQ) on this instance how to setup a reverse proxy with [nginx](https://www.youtube.com/watch?v=JKxlsvZXG7c). 

Finally, we will cover how to deploy a web application to this server using [github actions](https://www.youtube.com/watch?v=URmeTqglS58) and [dockerhub](https://hub.docker.com/).


## Assumptions

This guide assumes you have the following:

- Using AWS’s Free Tier/Trial opportunities for new & existing accounts
- Utilizing the latest version of `bcw` (*3.5.1 as of this writing*)
  - Run `npm i -g bcw` to globally install the latest version
- You have a web application that you want to deploy to an EC2 instance
- You have a basic understanding of web development and the command line
- You have a basic understanding of Git and GitHub
- You have a basic understanding of package managers like npm or yarn

> ⚠️ NOTES
> Commands with surrounding `< >` indicate a variable where you supply the value. 
> Do not include the `< >` characters.
