var greetings ="Hello FS cohort";
const time =5.1; // condition for comparison

// block scope
//false and true = false
if(time==5 && time>5) {
  greetings = "Hi So and so";
  console.log(greetings);
 //end of block scope  
}else{
    console.log(greetings);
}
 
var hello="Welcome note"
//false or true = true
if (time ==5 || time >5){
    hello="Welcome to Javascript"

    console.log(greetings+ " : " + hello);

}
else{
    console.log(hello + " " + "Value is false");
}

if(time != 5.1){
    console.log(greetings+ " : " + "Guesswork")
}else{ 
    console.log("yes it was!!")
}

//global and block scope