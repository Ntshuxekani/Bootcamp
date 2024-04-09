let courses = ["Javascript", "Java", "Angular", "React"];//pre-defined array of courses
let i;// counter for the for-loop
let length = courses.length; //total number of courses (array)

let space=" "; //home made space


for(i=0;i<length;){
 courses[i] += space
 i++;
  

}
console.log(courses);

//Lets display text five times according to the number of days in a week
const n=5;

for(let i=1;i<=n;i++){
    console.log("Lets code in javascript " + i + " day(s) of the week")
}