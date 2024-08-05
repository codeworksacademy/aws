# MDI Icons

> **Video Resources:** You can find the video resources for MDI Icons [here](https://codeworksacademy.com/#/auth/course/651dc81eae390961ceebd8cd/lesson/6553b50567d29db1bd90657c).

Material Design Icons (MDI) is a library of over 4, 000 icons that can be used in your web projects. The icons are available in various formats, including SVG, PNG, and Webfont. You can use the icons in your web projects by including the MDI CSS file and referencing the icons using their class names.

## Getting Started

To get started with MDI icons, you will need to include the MDI CSS file in your project. You can do this by adding the following link tag to the head of your HTML file:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css">
```

Once you have included the MDI CSS file, you can start using the icons in your project. To use an icon, you can add an element with the class name of the

```html
<i class="mdi mdi-account"></i>
```

This will display the account icon in your project. You can find a list of all available icons on the [MDI website](https://materialdesignicons.com/).

## Using Icons

You can use MDI icons in various ways in your web projects. Here are a few examples of how you can use the icons:

### Button Icons

You can use MDI icons on buttons to add visual interest to your UI. For example, you can add an icon to a button like this:

```html
<button>
    <i class="mdi mdi-heart"></i> Like
</button>
```

This will display a heart icon next to the text "Like" on the button.

### Navigation Icons

You can use MDI icons in navigation menus to indicate the purpose of each link. For example, you can add an icon to a navigation link like this:

```html
<a href="#">
    <i class="mdi mdi-home"></i> Home
</a>

<a href="#">
    <i class="mdi mdi-account"></i> Profile
</a>

<a href="#">
    <i class="mdi mdi-settings"></i> Settings
</a>
```

This will display icons next to each navigation link to indicate the purpose of the link.

### Accessability and Icons

When using icons in your web projects, it is important to consider accessibility. Screen readers may not be able to interpret icons, so it is important to provide alternative text for the icons. You can do this by adding a `aria-label` attribute to the icon element like this:

```html
<i class="mdi mdi-heart" aria-label="Like"></i>
```

This will provide a text alternative for the icon that can be read by screen readers.
