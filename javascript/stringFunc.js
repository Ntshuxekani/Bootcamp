let userName = "Alice";
let message =" Welcome, ";
from=" ";
text=" ";

let age ;
let prompt = require("prompt-sync")();


function sendMessage(){
    let message =" Welcome, "+ userName;
    console.log(message);
}


sendMessage(); //Always call/initilize variable inorder to get return value


function showMessage(){
userName="Bob";
console.log(message, userName);
}
showMessage();
console.log(message,userName);

function sendMessage(from, text){
from =" Anonymous";
text="Welcome to our channel";
 return from + text;
}

console.log(sendMessage(from,text));