# Extremely Realistic Sports Bets

![SportsBets](https://images.unsplash.com/photo-1563299796-b729d0af54a5?q=80&w=2225&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

*🤾‍♂️ I hope you're feeling lucky, because you are going to be building a website that allows users to place bets on sports teams, and rake in some (fake) riches if their team takes home the gold! 🏅*

The Sports Bets project is a web application that allows users to place bets of various amounts on different sports teams. Users can place multiple bets within the same session, and choose which team they would like to place a bet on. Teams are randomly assembled, and users will have to use their keen eye to spot the winning team to simulate a real betting experience.

## Goals

Students will build the betting application.
Users will be able to place bets on teams, and see a running total of their current earnings.

- Manipulate the DOM using draw functions
- Managing complex data stored in arrays
- Perform various checks and rules using comparisons
- Using array methods such as find, filter, forEach
- Assigning values using a random number using the Math.random() method

## References

>  [Figma Mock](https://www.figma.com/file/6bhtoqTNUQIkiUkqp9Fkhh/ERSB?type=design&node-id=0%3A1&mode=design&t=DPfXYyacnziSTYsa-1)
>
>  [MDN Docs Filter Array Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
>
>  [MDN Docs Random Math Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)




## **Building a Roster** 
Our 2 "sports" teams are going to be made up players drafted from one list. Below is some sample data you can use to get started. Feel free to add more players or remove them if you so choose. Setup your Javascript file with this data. 

We also want to create a global variable for our bank, to store our 💵 gains.

```js
let bank = 100

const players = [
  {
    name: "D'Marcus Williums",
    teamNumber: 0,
    emoji: '🏃‍♂️',
    skill: 10
  },
  {
    name: "Tyroil Smoochie-Wallace",
    teamNumber: 0,
    emoji: '🤾‍♂️',
    skill: 30
  },
  {
    name: "Jackmerius Tacktheratrix",
    teamNumber: 0,
    emoji: '🏇',
    skill: 88
  },
  {
    name: "Javaris Jamar Javarison-Lamar",
    teamNumber: 0,
    emoji: '🏌️‍♀️',
    skill: 15
  },
  {
    name: "D'Pez Poopsie",
    teamNumber: 0,
    emoji: '🏋️‍♂️',
    skill: 77
  },
  {
    name: "D'Jasper Probincrux III",
    teamNumber: 0,
    emoji: '🏌️‍♂️',
    skill: 21
  },
  {
    name: "Leoz Maxwell Jilliumz",
    teamNumber: 0,
    emoji: '🤾',
    skill: 5
  },
  {
    name: "Hingle McCringleberry",
    teamNumber: 0,
    emoji: '🏂',
    skill: 99
  },
  {
    name: "L'Carpetron Dookmarriot",
    teamNumber: 0,
    emoji: '🧘‍♀️',
    skill: 50
  },
  {
    name: "Xmus Jaxon Flaxon-Waxon",
    teamNumber: 0,
    emoji: '🚶‍♀️',
    skill: 1
  },
  {
    name: "Saggitariutt Jefferspin",
    teamNumber: 0,
    emoji: '🏋️‍♀️',
    skill: 61
  },
  {
    name: "Quatro Quatro",
    teamNumber: 0,
    emoji: '🤺',
    skill: 34
  },
  {
    name: "X-Wing @Aliciousness",
    teamNumber: 0,
    emoji: '🏄',
    skill: 71
  },
  {
    name: "Bisquiteen Trisket",
    teamNumber: 0,
    emoji: '🧜‍♂️',
    skill: 76
  },
  {
    name: "Scoish Velociraptor Maloish",
    teamNumber: 0,
    emoji: '🤸',
    skill: 47
  },
  {
    name: "Donkey Teeth",
    teamNumber: 0,
    emoji: '⛹️‍♀️',
    skill: 23
  },
  {
    name: "T.J. A.J. R.J. Backslashinfourth V",
    teamNumber: 0,
    emoji: '🕴️',
    skill: 58
  },
  {
    name: "Firstname Lastname",
    teamNumber: 0,
    emoji: '💃',
    skill: 99
  },
  {
    name: "Dan Smith",
    teamNumber: 0,
    emoji: '🧍‍♂️',
    skill: 3
  },
  {
    name: "Tiger",
    teamNumber: 0,
    emoji: '🐅',
    skill: 100
  },
]
```

## **Place your bets**

### **Drafting The Sports Teams**

Let start by adding in the functionality to our JS so that we randomly assign team numbers to the players.

Create a function named `draftPlayers` and for now lets just have it `log` to the console a message like "Drafting teams". While currently it doesn't do much we want it to run when the page loads, so lets *invoke* this function after our *definition* for it.

> 🧪 Does our console log our message each time we refresh the page?

Next let's have our function iterate over the players array and assign a *random* `teamNumber` to each player, either 1 or 2. You can use a for loop or a forEach to accomplish this, and will want to use the `Math.random` method to do this. 

>🧪 add a log, to log the players after the loop, and verify each player was given either a 1 or a 2 for their teamNumber. If you have decimals, don't forget to add a rounding function to your loop to keep it an integer.

Lets create another function to draw team 1. You will want to create a spot on your HTML, so that we can inject our team 1 emojis into. This function will have another loop, getting all the player emojis so they can be added to the page. *invoke* this function in our `draftPlayers` after the loop, so that it draws after the numbers are assigned.

Repeat this process for team 2.

>⚠️ If you're running into *"cannot set properties of null"* errors when you're trying to draw, then our `getElementById` is failing to grab our element from the page. Double check the spelling of your `id` on the element and in your method.


### **Money Down**

Start simple, test small. Create a button and a function that lets you place a bet for each team. `betTeam1`, `betTeam2`.

These functions will work very similarly, so lets just focus on team 1, then we can repeat this for team 2.

We want to first separate out the players, into 2 different variables containing 2 different arrays. You will want to use the `filter` method for both of these.

> 🧪 Log each array and verify the player objects are in the right spot.

Then once you have both of these arrays, you can create 2 more variables to represent each teams *totalSkill*. we can loop over each array adding each players skill to the appropriate *totalSkill* variable.

> 🧪 Log both of those *totalSkill* variables and verify they are added up correctly. If either are 0, something might have gone wrong.

Now we have both of those skill variables, we want to compare them. For our first function we want to check if team 1's skill is higher than team 2. If it is, lets add 25 to the `bank`. if it's wrong lets take away 25 from the `bank`.

> 🧪 Log the bank, and verify you are making money, or loosing your life savings.

You can add a window alert that lets the player know if they won 💵 or lost 💵.

Repeat the last few steps for `betTeam2`.

### **Draw the bank**

Create a function to draw our banks current value. We want this function to be *invoked* any time the `bank`'s value changes.

> 🧪 test your functions, make sure the bank display on your page updates after each betting scenario.

After drawing the `bank` value. Lets re-draft the players, so that our we can make another bet, with teams made up of different players, and we can keep betting until we make it rich or go broke.

### **Going bust**

Create a function that *invokes* when the player's `bank` reaches 0 or below.  This function should also be *invoked* any time the `bank`'s value changes. Add a window alert letting the player know, the game is over, They will never financially recover. You could even close the window for them.

### **Raising Stakes**

Lets create more functions that allow players to bet other values. This time though lets implement `parameters` and `arguments`. The *definition* can take in a `parameter` for `bet` and our click event can pass an `argument` of a number, like; 10, 25, 50, 100.

If players aren't confident in their team they can bet lower, if they are, they can bet higher.

Now that we aren't working with even values, we will want to make sure that the user actually has the available money in the `bank` before the betting logic is completed. Other than that we can use the `bet` parameter in place of the 25. This will allow this function to run for any value passed through, and we can create as many buttons as we want for any values.

### **Betting it all**

Let's create one more button, this one will bet everything we have in the bank.  This function will run the same logic as the other bet functions but now will work with our bank value, instead of a `bet`.


## **Last Call**

Much of the app could use some <mark title=" improve operation without altering functionality">"refactoring"</mark>. There may be lots of repeated lines of code between our functions, meaning they could be replaced with a single more flexible function. 

Our drawing of the players could also become a little more complex. Instead of just drawing emojis to the page, can we draw a little template that includes the players name?

consider some of these stretch goals

### Stretch Goals

- Track the highest bank value in local storage, and display it as a *high score*.
- Create another global variable to track how many bets you've won, and bets you've lost.
- Same could be done for money won, and money lost, instead of just current `bank` value.


