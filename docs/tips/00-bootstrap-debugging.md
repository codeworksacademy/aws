# Bootstrap Debugging

It can be frustrating when your Bootstrap layout isn't working as expected. Here are some common issues and how to fix them. We have also provided a script that you can use to debug your Bootstrap layout more easily.

## Common Issues

### 1. Columns Not Lining Up

If your columns are not lining up correctly, it could be due to the padding and margin on the columns. Make sure that you are using the correct classes for your columns and that you are not adding any additional padding or margin that could be causing the issue.

### 2. Grid Not Responsive

If your grid is not responsive, it could be due to missing viewport meta tags in your HTML file. Make sure that you have the following meta tag in the head section of your HTML file:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### 3. Navbar Not Collapsing

If your navbar is not collapsing on smaller screens, it could be due to missing JavaScript files in your project. Make sure that you have included the Bootstrap JavaScript files in your project:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
```

## Debugging Script

To help you debug your Bootstrap layout more easily, we have provided a script that you can use in your project. Add the following script to the end of your HTML file, just before the closing `</body>` tag:

```html
<script src="https://cdn.jsdelivr.net/gh/MickShannahan/style-debug@latest/debug.min.js" defer></script>
```

This script will output any Bootstrap layout issues to the console, making it easier for you to identify and fix them.

you can toggle the script effects on and off by adding the `debug` class to the body tag like this:

```html
<body class="debug">
```

This will enable the script and output any layout issues to the console. To disable the script, simply remove the `debug` class from the body tag.

By following these tips and using the provided script, you should be able to debug your Bootstrap layout more easily and get your website looking great in no time. Happy coding!
