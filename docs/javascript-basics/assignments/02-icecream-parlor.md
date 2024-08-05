# Ice Cream Parlor

![IceCreamParlor](https://user-images.githubusercontent.com/102513373/209418532-872e7d84-675f-444f-848a-d0108dcf1f6d.png)

*🍦 Hope you have a sweet-tooth, because you will be in charge of building an Ice Cream Parlor website. This website will allow your customers to create a checkout cart by choosing their Ice Cream flavors, Toppings, and Containers 🍨*

The Ice Cream Parlor project is a web application that allows customers to create a customized ice cream order. Customers can choose from a selection of ice cream flavors, toppings to create their perfect ice cream cone.

## Goals

In this assignment students will demonstrate the ability to manipulate the DOM using Javascript. Students will also utilizes the find method and how to work with data in an array to create an ice cream cone and keep track of the total price.

Students will build the store front of an Ice Cream Parlor. Users will be able to add scoops of Ice Cream to their order, see the total price, and 'checkout' clearing the cart.

- Manipulate the DOM using draw functions
- Managing complex data stored in an arrays
- Using array methods

## References

>  [Figma Mock](https://www.figma.com/proto/gH8IVUFHYyqZYcp1FsfSyo/Ice-Cream-Parlor?node-id=0%3A1)
>
>  [MDN Docs Find Array Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)


## **Setting Up Shop** 

Here is some good sample data. Setup your Javascript file with this data. Feel free to add more data and properties to these arrays if you choose.

```js
const iceCream = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0
}, 
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
}, 
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
}],

const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
}, 
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Cookie Chunks',
    price: .5,
    quantity: 0
}]
```

You will want to build out some cards in your HTML representing each of the of the options available on the menu. They don't need any functionality yet and don't even need to look that pretty for now.

## **Making it Work**

### **Order a Scoop or Two**

Let start by adding in the functionality to our JS so that we can order a scoop of *vanilla*.

Create a function named `orderVanilla` and for now lets just have it `console.log('ordering vanilla')`. Add a click handler to the vanilla card in our HTML and look in the console for out message.

Lets add to our function. We want this to grab reference to the *vanilla* object out of the `iceCream` array and increase it's `quantity` property by 1. You can grab it by creating a variable setting it equal to a direct reference of the position of *vanilla* in the array, or you can use the `.find` method to store reference of it. Both work great for this function.

>🧪 console log the variable you created on the next line, to make sure you are grabbing the right ice cream object

Once we have the reference of the object, we can access it's `quantity` and increase it (++, +=, etc.). Check your console.log and make sure the objects `quantity` is increasing each time you click the card.

Repeat this process for the rest of the ice cream flavors.

>⚠️ If you're running into *"cannot set properties of undefined"* errors, then our variable is not getting set right. Double check how you assign that variable's value


### **Calculating the Order**

We can order our ice cream now but something that should happen is adding up the cost of our frosty made to order treat. We will want to create a function that will loop over the ice cream array, and add up the cost of our scoops.

This function should have a variable used to store our `cost` and as it loops over the array it will add each ice cream's `(price x quantity)` to that `cost`. This function should run anytime a scoop of ice cream is added.
>🧪 console.log the value of cost to make sure your scoops are adding up correctly.

### **Display the Order**

So far all the work we have been doing exists in the console, which is great for when we are building our app and testing but doesn't make for a good user experience. 

We want to draw our order and total to the page. Create a place in your HTML that we can our cart, by giving an element a unique `id` like `cart`. You will want to do the same for our total in a different element. Remember we want to draw the cart *and* our total

**Drawing the Total**

 Start with the total for now. In our calculating order function, after the calculation; let's grab the *DOM* by the `id` we just created for our total and set the `innerText` equal to our `cost`. Now when we add scoops we should see this number change.

>🧩 you can use `.toFixed(2)` on the total to format it like a monetary value


**Drawing the Cart**

Create a `drawCart` function. Similar to our calculating order function we will want to loop over our array of ice cream items, however instead of adding up a total price we want to add `strings` together to create *content* to be rendered on the page.

In our `drawCart` create a variable to store our *content* like `let cartContent = ''`. In our loop, lets add a `string` like this to our variable.
```javascript
`<p>Ice Cream Flavor | qty: X</p>`
```
Lets then grab the *DOM* by the cart `id` and this time set the `.innerHTML` equal to the content string we created. Lets call the `drawCart` function from the calculate order function so it runs each time we add a scoop.

We should see "*Ice Cream Flavor | qty: X*" appear a few times on our page now. Close but not exactly what we want. We can modify that string to use <mark title="the process of evaluating a string containing one or more placeholders, yielding a result in which the placeholders are replaced with their corresponding values">"String Interpolation"</mark>. This is done by creating a string with ( ` ), the back tick character and ${ } to *inject* our ice cream data.

Now when the cart is drawn it should include the correct names and quantities.

### **Ice Cream Without Toppings?**

With ice cream flavors complete we will want to repeat the functionality added for our toppings.  You can create an additional loop in your previous functions to add up cost of your toppings, and list the toppings out into the cart.


## **Finishing**

Much of the app could use some <mark title=" improve operation without altering functionality">"refactoring"</mark>. There may be lots of repeated lines of code between our functions, meaning they could be replaced with a single more flexible function. You would want an `orderIceCream` function and a `orderTopping` function. Each could take in a string as a `parameter` representing the name of that item. Each item card can now pass their name as an `argument`, and the appropriate order function can `.find` it by that name, and complete it required content.

For more practice with writing functions. consider a 3rd array for containers like cups, cones or waffle cones.

consider some of these stretch goals

## Stretch Goals

- Be able to purchase the Ice Cream and then 'Check-Out' and reset the whole process.
- Ice cream can't have multiple containers, only allow the user to select one container.
- Draw the Ice Cream to the page! instead of of the receipt draw an ice cream cone that grows when you select more ice cream. 

