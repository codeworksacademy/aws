# SCOREBOARD


![Scoreboard](https://images.unsplash.com/photo-1563947917928-f7902975e12e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8U2NvcmVib2FyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&h=400&q=60)

*🏈 Sick of your team always being down on the scoreboard? Build one yourself and give them all of the points! 🏅*

## Goals

In this assignment students will demonstrate the ability to manipulate the DOM with Javascript. Students will utilize Javascript fundamentals to increase a score, and render those changes to the screen. 

Students will need to create a *scoreboard* where two scores are shown on the page, clicking one button increases the score of *team 1* and the other affects the score of *team 2*

- Manipulating the DOM
- Javascript Math Functions 


## References

> - [Figma](https://www.figma.com/file/KpRfQEOLSOzwKtEHddMWoe/Scoreboard)


## **Pre-Game**

Create & Connect your HTML, JavaScript, and CSS files.

CSS is connected via `link` tag, but JavaScript is connected through `script` tags.

Test to make sure all of these files are linked together before you really get into it. Apply a background color to your `body` in CSS and `console.log('something')` in your JS.

>🗝️ *As you go make sure, to build small and test small. This will help you down the road when you run into errors as you will have less to debug.*

> 🗝️ *Remember that using references and asking for help is part of the process!*

## **Game Time**

### **Buttons and Click events**

Start with getting a button on the page and a single function in your JS. For now just have the function console log a message. When someone clicks the button it should run the function, and we should see our message in the console.

```js
console.log("Button Clicked!")
```

### **Scoring Points**

Once you can confirm that the button is working. Create a variable for each team outside of the function. This will give these variables <mark title="They can be accessed from anywhere within this js file">"global scope"</mark>

```js
let home = 0
let away = 0
```

Focusing on the home variable for now, update our function to increase this variable and logs the value. You should see the number go up each time you click the button.

Now create a second button that will increase your opponents score! You will want a second function to do this.

>🧪 Test that these scores increase independently of each other.

### **Scores on the Board**

Scores increasing in the console is cool but our user's will never have that open to see. Lets put these scores on the page.

Create a couple elements on our page one for each of our teams. Give each of these elements a unique `id`

Starting with our first function, lets add to the end of it. Lets use *DOM* to inject a new value onto the page matching the value of the variable.

Now when we click our button the page should update along with it.

Repeat process for the second team.

Don't worry about styling to begin with. There will be plenty of time for that once basic functionality is in place!

## **Post Game**

### **Score More Points**
Create some more functions that add more than one point for the teams

Add in some logic, so once one team reaches a score threshold, a window `alert` appears declaring the winner.

Add in a button to remove points. This shouldn't allow the points to go below `0`

Add in a button to reset both teams to `0` points, so they can start a new game. Maybe have this function be automatically called after the score threshold is called and a winner is declared.

### **Refactor your Code**

Don't be afraid to go back and clean up your code. Try to utilize `parameters` and `arguments` within your functions to make them re-usable. 
> 🧩[MDN parameters](https://developer.mozilla.org/en-US/docs/Glossary/Parameter)

Move all of the DOM interactions to one *draw* function. Anytime data changes you can call this *draw* from within other functions.