
let prompt = require("prompt-sync")();


//write a program that will check if the user is old enogh to access the site

function checkAge(age){
    if(age>=18){
        return true
    }else {
        return console.log("You are underage! ");
    }
}

 let age=(prompt("How old are you?", 18));
    if(checkAge(age)){
        console.log("Access is granted");
        showMovie();
    }else {
        console.log("Acceess Denied");
    }

function showMovie(){

    /*while ((checkAge(age))){
        console.log("Playing movie soon..");
        break;*/

        let d =100;// duration
        let i = 0; //counter
        for(i=100000;i>d;i--){
            console.log("Access granted!");
            console.log("Playing a movie....", i);
        }
    }



