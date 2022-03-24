let max = parseInt(prompt("enter a number between 1 to 30"));
while (!max || max >= 30) {
    max = parseInt(prompt("enter a valid number"));
}

const target = Math.floor(Math.random() * max) + 1;
console.log(target);
 
let guess = parseInt(prompt("enter your first guess"));
let attempts = 1;
while (parseInt(guess) !== target) {
    if (guess === 'q') {
        break;
    }
    attempts++;
    if (guess > target) {
        guess = prompt("too high, enter new guess");
    }  else if (guess < target) {
        guess = prompt("too low, enter new guess");
    }
}
if (guess === 'q') {
    console.log(`the number was ${target}`)
} else {
    console.log(`you got it, it took you ${attempts} guesses`)
}