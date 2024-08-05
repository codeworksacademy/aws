# The Flex Page

Let's talk about the Flex Page. This is a page that is designed to be flexible and adapt to different screen sizes. This is important because we want our website to look good on all devices. To understand how the flex page works, we need to understand flexbox.

## Flexbox

[Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) is a layout model that allows you to design a page layout without using floats or positioning. It is a one-dimensional layout method for laying out items in rows or columns. Items flex to fill additional space and shrink to fit into smaller spaces.

### The Flex Body

The body of the page is the main content area. It is where you will put all of your content. The body should be flexible and adapt to different screen sizes. A cool trick to your page always look good is to set the body to `display: flex;` and `flex-direction: column;`. This will make the body a column that will adapt to the screen size. I also like to set the body to `min-height: 100vh;` so that it always takes up the full height of the screen.

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
```

### The Header and Footer

The header and footer are the top and bottom of the page. They are usually fixed and do not change size. You can set the header and footer to `flex-shrink: 0;` to make them fixed. You don't have to worry about setting any other property for layout on these elements since their content alone will makeup their size.

```css
header, footer {
  flex-shrink: 0;
}
```

### The Main Content

The main content area is where you will put all of your content. It should be flexible and adapt to different screen sizes. You can set the main content area to `flex-grow: 1;` to make it take up the remaining space on the page.

```css
main {
  flex-grow: 1;
}
```

