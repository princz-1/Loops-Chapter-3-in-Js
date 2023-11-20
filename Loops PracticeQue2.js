// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters the correct value.

let num = 25;
let  user = prompt("Guess the game number");

while(num != user){
  user = prompt("You entered wrong number. Guess again");
}
console.log("Congratulation, you entered the right number");
