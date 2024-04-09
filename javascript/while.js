//Lets create a program that calculates positive numbers only
//if user enters a negative number that number should be skipped.
let prompt = require('prompt-sync')();

//negative numbers-> loop must terminate
//non numeric characters--> skip iteration

let sum=0;
let num =0;
while (num>=0){
    sum+=num;

    //accept input from user
    num=parseInt(prompt('Enter a number'));

    //continue condition Nan= Not a Number
    if(isNaN(num)){
        console.log("You entered a string ,that is not a number!");
        num=0;
        continue;
    }

}

//diplayed results

console.log(`The sum is ${sum}`);