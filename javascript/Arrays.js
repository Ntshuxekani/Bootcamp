let courses = ["Javascript", "Java", "Angular", "React"];//pre-defined array of courses

courses.length=10;

courses[4]="Typescript";
courses[5]="Vue";

console.log("Number of courses available: " , courses);
//checks if the array is an object or string
console.log(typeof courses);

//injecting multiple values into a single array
courses.push("C++", "Flutter", "C#","Python");//expanding the size of an array
console.log("New semester courses: " + courses);

//check if the array is an array method
console.log(`causes are : ${courses instanceof Array}`);



let faculty=courses.toString();
console.log(`faculty are : ${faculty instanceof Array}`);
console.log("Courses as String: " + faculty);
console.log(typeof faculty);
console.log(faculty.toUpperCase());


let learners = new Array(); // undefined array

learners[0]=1;
learners[1]=2;
learners[2]=3;
learners[3]=4;
learners[4]=5;

console.log("Total Number of leaners: ", learners.length)

