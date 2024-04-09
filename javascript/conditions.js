const gpa =180;
//pass_mark=50;

const exp= 70;
const dist = 85;
const avg = 50;
const fail= 49;
const dnw= 0;

if(gpa >=dist){
    console.log("You passed with distinction: " + gpa);
}else if(gpa >=exp && gpa<dist){
    console.log("You passed with examption: " + gpa);
}
else if( gpa>=avg && gpa<exp){
console.log("You passed with Average: " + gpa);
} else if(gpa>dnw && gpa<=fail){
    console.log("You failed: " + gpa);
}else if(gpa==dnw){
    console.log("You did not write: " + gpa);
}else{
    console.log("Try again next year")
}