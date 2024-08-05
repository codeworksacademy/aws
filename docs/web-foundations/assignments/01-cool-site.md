# Cool Site

![CoolSite](https://cwcurriculum.blob.core.windows.net/fullstack/assets/img/coolsite.png)

*Let's make a cool site for cool people that do cool things. ......*

## Goals

Practice page architecture and layout by replicating the image above in HTML/CSS.

practice using the `display: flex` property in CSS


### References
> [CSS Tricks Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
>
> [Explanation on Why to Avoid Floats](https://blog.prototypr.io/should-we-stop-using-floats-e01742a88f8d)

> 🗝️ *Remember that using references and asking for help is part of the process! But so is breaking things and learning from those mistakes.*


### **Starting**

In your command line create your files. 

`mkdir` to create the directory for your project.

`cd PROJECTNAME` into the project you just created.

`touch` to create the files within your project. It will include an *index.html* and a *style.css*.

open the project in vscode and use `!` to get a default HTML template.

> *⚠️ Make sure that your CSS and HTML are linked together!*

**Assets:** If you want to include the actual assets from this project you may do so but you can also feel free to branch out and pick your own unique flare of images and colors.


![colors](https://cwcurriculum.blob.core.windows.net/fullstack/assets/img/coolsite-colors.png)


- [Logo](https://cwcurriculum.blob.core.windows.net/fullstack/assets/img/coolsite-logo.png)
- [World](https://cwcurriculum.blob.core.windows.net/fullstack/assets/img/world.png)

## **Building**

### **laying out the page**
Your first step should be building out the basic layout of the page. Try drawing some boxes on paper or in a visual app like figma or paint to visualize the different sections of the page.

Anytime you want content boxes to sit side by side, you will want to use the `display: flex` property. We can also utilize CSS dimension properties like:
 * `width & height`
 * `min-width & min-height`
 * `max-width & max-height`
as well to fit things into general locations

Your focus now should just be getting the sections and content boxes into approximately the right places, don't worry too much about sizing.
> 🧩 You could color the background of each section using CSS to better define them.
>
> 🧩 Try using a CSS rule like `*{outline: 1px dotted black;}` to get a better visualization or your boxes as you build them on the page.


### **filling in the content**
Now, you can start filling out the boxes you have previously layed out. You can use vscodes *lorem* generator to generate large amounts of text content. Again the focus should be on approximately the right content in approximately the right spot (paragraph on the left, image on the right etc.).

### **styling it up**
If we are happy with the general layout of the page and its content we can start to style it to make it more accurate to the reference provided.
 
to better shape our content on the page we can use CSS properties like `padding` to increase the space between the content and it's border and `margin` to increase the space between our different content boxes. `justify-content` and `align-items` on the same element as `display: flex` will  allow us to move our content boxes inside around with more control.

Some of the content on the page might also be better suited using semantic tags like `header`, `main` and `footer`. Or by using tags like `a` to create links or `h1-6` to created headers.


## **Finishing - Stretch Goals**

Now that you've replicated this cool site, try using media or container queries to make it mobile friendly.  You made to make multiple changes to your css for this to work but don't shy away from breaking things to make it better.  A general rule for mobile is to layout your page more vertically as opposed to side by side, as a user would scroll up and down through the content.

> [Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
>
> [Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)

## Good Luck!