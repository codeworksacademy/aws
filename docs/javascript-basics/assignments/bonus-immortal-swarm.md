# 🦇 Swarm

![vampire](https://cdn.codeworksacademy.com/assets/img/projects/bats.png)

This is a Vampire Web Game where you the user take on the role of Vampire and attempt to turn all of the citizens in town into 🦇, However the clock as ticking as the sun will rise in a few short hours!

## Introduction

In this game, you have a list of people represented by emojis, each with a name, picture, location. The locations are also represented by emojis.

We are going to build this game with an iterative approach, adding features and more gameplay opportunities as we go.

Go ahead and copy & paste this starting data into your JavaScript file.

```js
const locations = [
    '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
        name: 'Jimbo',
        picture: '🤵',
        location: '🏤'
    },
    {
        name: 'Sammy',
        picture: '🙆‍♀️',
        location: '🏤'
    },
    {
        name: 'Michael',
        picture: '👷',
        location: '🏤'
    },
    {
        name: 'Robert',
        picture: '👷',
        location: '🏥'
    },
    {
        name: 'Terry',
        picture: '🤴',
        location: '🏥',
    },
    {
        name: 'Bill',
        picture: '🕵️',
        location: '🏥',
    },
    {
        name: 'Marie',
        picture: '👩‍🍳',
        location: '🏭',
    },
    {
        name: 'Mykeal',
        picture: '💂',
        location: '🏭',
    },
    {
        name: 'Phil',
        picture: '🧜‍♂️',
        location: '🏭',
    },
    {
        name: 'Wilson',
        picture: '🏐',
        location: '🏢',
    },
    {
        name: 'Wendy',
        picture: '👩‍⚕️',
        location: '🏢',
    },
    {
        name: 'Jeremy',
        picture: '🦹',
        location: '🏢',
    }
]
```


## Let's get building!

Well lets hold off on that for just another moment. First lets talk about iterative design (just a little, I promise it will help). Iterative design is a design methodology based on a cyclic process of prototyping, testing, analyzing, and refining a product or process. That's a lot of jargon for "Build it simple and add complexity as you go." 

Think of this as coding in different states of *done*. As we build this game, it may not be *fun* at first but it will work. As we build further and add more complexity the challenge of the game will increase, making it more fun. Adding further complexity and challenge will come easier, because game will have a solid foundation to expand upon.

> Test each of the following steps before moving onto the next
>
> **Validation and Testing: 🧪**
> - Make sure to thoroughly test each task before moving on to the next one.
> - Verify that locations are displayed correctly as buttons and can be clicked.

01. **Building a Town:** Get our locations to the page
       - For each location in the `locations` array, create an element in the `index.html` file.
       - Give each location a `button` for us to *attack* the location
       - Give each location a `p` with an `id` of that locations emoji. e.g. `id="🏭"`. This `p` will be where we draw our citizens to the page.
     

02. **Populating Our Town:** Draw our people to the town locations on the page
       - Create a draw function that can draw the people to each location, based on their current location
        - At the start we will need to draw people into  the 5 different locations.
        - Our drawing logic will repeat per location so Iterate over the `locations` array using a for loop or forEach.
       - Use the `filter` method, inside of the loop, to create a new array of `filteredPeople` who are at the current location.
       - Use `map` on the `filteredPeople` to pull out just their `picture` or emojis.
       - Get the corresponding location html element by its id then insert the array of `pictures` to this elements `innerText`.
       - 🧪 In the starting array there are 3 people in 4 different locations, one should be empty.
     

03. **Let's Make Some Bats:** Attack a location and turn them into bats
       - Add an event listener to each location button to detect clicks.
       - you can use the event's emoji to indicate which location was clicked.
       - 🧪 Console log the emoji of the town you clicked on.
       - When a button is clicked, get all people who have the same location as the button.
       - Iterate over the `foundPeople` and change their `picture` property to 🦇.
       - 🧪 Call your draw function to ensure this location is now full of bats.
     

04. **If It's a Game, How Do I Win?:** Add a win condition to the game
       - Create a function to check the endgame conditions after each round or attack.
       - Check if all people have been turned into bats (🦇).
       - If all people are bats, display a victory message and end the game.
       - 🧪 Attack every location and ensure your end message is displayed.
     

05. **Get These People Moving:** People should move after each attack
       - Iterate over the `people` array using a for loop or for Each.
       - Assign each person's location to a new *random* location.
       - This function can be called at the end of each attack, just before the `draw` 
       - 🧪 Attack a location and see your bats move.
     

06. **Where's the Challenge If You Can't Lose?** Add a losing condition to the game
     - Create a variable to represent hours left till dawn
     - After every attack, reduce this number
     - If this number hits 0, The sun has risen and we perish!
     - Increase the challenge of the game by adding more people and more locations, play with the numbers till it feels right.

### The Endgame
Good Job!

From here we more or less have our game. We could take some time to balance the numbers and style it up to look nice.

We could also add some more complexity to our foundation to make the game even more fun. Perhaps we introduce a vampire hunter who is able to thwart our attempts.

07. **Every Great Villain Needs A Hero:** Create a vampire hunter to hide amonst the people
       - Create a `hunter` variable to store a hunter
       - Create a function that selects a random person from the `people` array.
       - Save that person's name into the hunter variable making them the hunter
       - 🧪 When the page loads try to console log who the hunter is.
     

 08. **No Trifling With Me!:** Add functionality to stop the vampire
        - Update the Attack function.
        - If the vampire attacks a location that has the vampire hunter, the vampire is slain (you lose).
        - 🧪 The game is technically un-winnable at this point.
      

10. **Vampire Hunter Too Strong Please Fix:** Add functionality to turn the vampire hunter
    - The hunter can in fact be turned, but only once the rest of the town is 🦇.
    - When the hunter is found at the attacked location check for the following condition.
    - Check the people array to see if everyone except the hunter is a 🦇.
    - If everyone is 🦇, the vampire has triumphed and turned the hunter into a 🦇 too.
    - 🧪 This should trigger our original win condition.

## Finishing up

The Game is now complete and the sky is filled with bats, but don't stop now! Feel free to add even more to give it your own touch.  Here are some more ideas to expand upon.

 **Additional Enhancements and Difficulty Ideas:**
   - Implement additional features to increase the game's difficulty or add variety.
   - If a 🦇 and the hunter share a location, alert the player.
   - Introduce more people and locations to make the game more challenging.
   - After the whole town is turned, reset to the original state to play again, like you are going from town to town.
   - Consider adding multiple vampire hunters to increase the complexity.
   - Explore various options to further customize and enhance the gameplay.

 **Styling the Game:**
   - Apply CSS styles to the HTML elements to enhance the game's visual appearance.
   - Consider using CSS properties like `background-color` , `font-size` , `padding` , and `border` to modify the buttons and their overall layout.
   - Experiment with different color schemes, fonts, and visual effects to create an attractive user interface.

