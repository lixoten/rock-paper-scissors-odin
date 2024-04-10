# Project: Rock Paper Scissors

## Assignment
1. In GitHub start a new repo for your project.
2. Clone this new repo locally... Use SSH, copy to clipboard. 
   * git clone...
3. Create you tree structure if needed... (for now, no src, js, css folders)
   * docs (my notes and etc...)
4. Create a blank HTML document with a script tag This game is going to be played completely from the console.
   * index.html
5. Create a new js file.... 
   * main.js
6. Your game is going to play against the computer, so begin with a function called `getComputerChoice` that will randomly return either **‘Rock’**, **‘Paper’** or **‘Scissors’**. We’ll use this function in the game to make the computer’s play. _Tip_: use the console to make sure this is returning the expected output before moving to the next step!
7. Write a function that plays a **single round** of Rock Paper Scissors. The function should take **two parameters** - the `playerSelection` and `computerSelection` - and then **return a string** that declares the **winner** or **tie** of the round like so: **"You Lose! Paper beats Rock"**
   * Make your function’s `playerSelection` parameter **case-insensitive** (so users can input rock, ROCK, RocK or any other variation).

8. **Important note:** you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:
   ```javascript
   function playRound(playerSelection, computerSelection) {
   // your code here!
   }
   
   const playerSelection = "rock";
   const computerSelection = getComputerChoice();
   console.log(playRound(playerSelection, computerSelection));
   ```

9. Write a NEW function called `playGame()`. Use the previous function inside of this one to play a five round game that keeps score and reports a winner or loser at the end.
   * You have not officially learned how to **“loop”** over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
   * At this point you should be using `console.log()` to display the results of each round and the winner at the end.
   * Use `prompt()` to get input from the user. Read the docs here if you need to.
   * Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
   * Feel free to create more **“helper”** functions if you think it would be useful.