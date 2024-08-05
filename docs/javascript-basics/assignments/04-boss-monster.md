# Boss Monster

![BossMonster](https://user-images.githubusercontent.com/102513373/209418612-8627bdcd-1f38-4057-8a98-e61f7076a0d7.png)


*Ready for a Boss Fight?*

*You are a heroic knight ready to face your big battle, the BOSS MONSTER! Every time you knock it down it gets stronger! How long can you last against such a foe!*

## Goals

Students will demonstrate the ability to manipulate objects in an array and maintain an updated page with all the current data values. As well as working with an interval. 

## References

> - [Figma](https://www.figma.com/file/KBrXO4Dvz0k1vrwftq2KF5/Boss-Monster)

## Suggestions

You will want to start by creating your heroes array and the object to represent 'the boss'. The directions on this will be based around a knight and a monster, however feel free to mix it up with your own creative ideas.

#### Project Steps

1. Create HTML elements for displaying the heroes and the boss on the page. Include their names, health, and images. Give them appropriate IDs for targeting.

2. Add an onclick attribute to the boss image to attack the boss. Write a function that calculates the combined damage of the heroes and reduces the boss's health accordingly.

3. Implement a function to make the boss fight back. This function should loop over the heroes array and reduce their health by the boss's damage. Test the function in the browser's console.

4. Set up an interval to call the boss's attack function every 5 seconds. This will create a continuous battle between the heroes and the boss.

5. Add logic to check if the boss is defeated. When the boss's health is less than or equal to 0, implement a function to level up the boss. Increase its level, max health, and reset its health to the new max value. Redraw the boss on the page after leveling up.

6. Display the number of defeated monsters and the current boss level on the page.

7. Add a gold reward value to the boss. Create a global variable to hold the heroes' gold and display it on the page. Increase the reward as the boss levels up.

8. Implement a function to heal a hero when clicked. Attach this function to a button or the hero's image, passing the hero's name as a parameter. Use the find method on the heroes array to retrieve the corresponding hero object. Increase the hero's health if they have enough gold, decrease the gold, and update the page.

### Create Hero and Boss

Start by creating some javascript objects for your heroes and your boss.  The Heroes can be an array of objects, but for simplicity leave the boss as just an object on it's own.

```js
const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 50
    }
]

const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}
```

Now add some images on your page to represent these two characters, with a their name and health. Then the same for your boss.  If you want to get fancy you can give each of these characters progress bars instead of numbers to represent their health but this isn't necessary. Don't forget to give these id's so they can later be targeted.

### Attack the Boss

On the boss's image, add a click attribute that will attack the boss. This method should reduce the boss's health by the COMBINED damage of the heroes.  Write a loop ( or a forEach function ) to add up the heroes damage together, then reduce the the boss object's health by that number. e.g. the dwarf deals 5 and the elf deals 10, so the boss will lose 15 health.

> *⚠️ If you are struggling on how update the value, you can do so by either replacing the entire element or simply setting the `.innerText` property of the element in after getting it in javascript.*

**once you have this working, see if you can get the value to stop at 0 and prevent the value from going into the negatives*

### The Boss Fights Back!

So that the game has some inherent risk, we want our boss to fight back. We will need to write a function that loops over our heroes array and reduces their health by the damage the boss deals. In the example this is 5. Test if this function works the way you expect it too by calling it from the browser's console. Each time you call the function the heros' health should go down.  Once that works set up an interval to call the this method every 5 seconds.  Now the battle has begun!

> *Once you have that working it can be fun to give the boss a bit of variable damage, either use a random number between two values or for better use in a later step, damage the heroes by the boss's damage multiplied by it's level.*

> *To create a losing scenario if all the heroes are reduced to 0.  Look into the array `.every` method.  something like heroes.every(hero => hero.health <= 0) to determine if they are all dead.*

### Leveling up

To have an ever increasing challenge once our boss is defeated, instead of letting them die and locking their health at 0, we want to have the boss "level up".  Let's add some logic to our function that attacks the boss, to determine if the boss is dead ( health is less than or equal to 0 ).

When you reach the logic that the boss has been defeated, instead of preventing the health going negative, the boss can level up and the battle can begin again!  Write a function that levels the boss up and heals them.  Increment their level, increase it's max health then set the boss's health equal to it's new max health.  Don't forget to re-draw the monster after it has leveled up!

> *For the progress bar this may require you to create a property called 'max health' so that the progress bar has a relative max to the new value.*

**add some fun text, alerts, or indications that show how many monsters have been defeated / what level the monster is on*

### Where is the reward?

We want to reward our hero's for the hard work of slaying monsters all day. Add a value to the monster to represent the 'gold' reward for slaying the monster. There will also need to be a global variable to hold the gold the hero has won, which can then be displayed to the DOM.

> *As the monster levels up, consider increasing the reward as well, so the tougher monsters drop better rewards.*

### I'm Dying Here!

After a few rounds the heroes will lose every time. Let's add a sort of 'health pack' that the player can buy with their hard earned gold, that way we can keep our heroes alive and slaying monsters.  We will need to write a function that takes in a hero's name as a `parameter`.  Attach this function to some sort of onclick either on a button or on the hero themselves, that passes their name as a `argument` when you click it.  Use this name to write an array `.find` method to get the entire hero object out of the heroes array with that has that name.  Try console logging what you found.  Is it the hero you expected? Once you have that working you can increase the hero's health.  

You will want to write in the logic to check if they have enough gold before you increase their health.  Don't forget to decrease their gold, and finally update the page to reflect the changes.

### Stretch Goal ideas!

- Add in some logic that makes the heros only deal damage if they are alive.  Add some logic to attacking the boss that only includes alive heros in the calculation.

- Level up your heroes!  Give each hero a level like the boss.  Add another button for each hero so you can level them up making them more effective in the battles to come.

- Add more heroes.  More heroes will create more of a challenge as there will be more to manage.  This could easily get quite hectic.

- More bosses.  Instead of one static boss there could be an array of bosses that you rotate through.  The boss you fight could always be the first one and when they die, utilize the array `.unshift` and `.push` methods to move them to the back of the array.
