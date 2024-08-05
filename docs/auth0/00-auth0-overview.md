# Auth0 

Auth0 is a flexible, drop-in solution to add authentication and authorization services to your applications. Your team and organization can avoid the cost, time, and risk that comes with building your own solution to authenticate and authorize users.

In this guide, you will learn how to set up an Auth0 account, create an application, and configure it to authenticate users using Auth0. You will also learn how to secure your application by implementing role-based access control and integrating social login providers.

## Prerequisites

Before you can get started with Auth0, you need to have the following:

1. Create an account on the [Auth0 website](https://auth0.com/).
2. Log in to your Auth0 account and navigate to the [Applications](https://manage.auth0.com/dashboard/us/dev-1/applications) section.
3. Click on the "Create Application" button to create a new application.
4. Enter a name for your application and select the type of application you are building.
5. Click on the "Create" button to create the application.
6. Once the application is created, you will be redirected to the application settings page. Here, you can configure various settings for your application, such as the allowed callback URLs, logout URLs, and more.

## Setting up Auth0

To set up Auth0 for your web application, follow these steps: 

* Open up the Auth0 dashboard https://manage.auth0.com/dashboard 
* Navigate to Applications/Applications > open your “Single Page Application” entry

![image](/images/image7.png)

* Under Settings, add your domain to each of the four Allowed text-blocks as a new entry
* Using the wildcard form with https - eg. https://*.koreangeekman.dev
* Add to:
  + Allowed Callback URLs
  + Allowed Logout URLs
  + Allowed Web Origins
  + Allowed Origins (CORS)

```text
http://localhost:8080, http://localhost:8081, http://localhost:3000, http://localhost:3001, http://localhost:7045, https://localhost:7045, https://*.koreangeekman.dev
```

![image](/images/image38.png)

Be sure to `Save Changes` at the bottom
