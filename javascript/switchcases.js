//Simple calculator using js ans switch case

//library module needed to accept user input
const prompt=require('prompt-sync')();

let results;
//accept operator input
const operator =prompt('Enter operator (either +, -, * or /):')

//accept an operand input
const num1=parseFloat(prompt('Enter first number: '));
const num2=parseFloat(prompt('Enter Second number: '));

switch(operator){

    //formual for addition
    case '+':
        results= num1 + num2;
        console.log(`${num1} + ${num2} = ${results}`);
        break;
  //formual for subtraction
        case '-':
            results= num1 - num2;
        console.log(`${num1} - ${num2} = ${results}`);
        break;
  //formual for multiplication
        case '*':
            results= num1 * num2;
        console.log(`${num1} * ${num2} = ${results}`);
        break;
  //formual for division
        case '/':
            results= num1 / num2;
        console.log(`${num1} / ${num2} = ${results}`);
        break;

   //formual for addition
        case '/':
             results= num1 / num2;
         console.log(`${num1}  ${num2} = ${results}`);
break;
 

}