const Person ={
///data properties
//key         value
firstName : "Alice",

//accessor property (getter)
get getName() {
    return this.firstName;
}
,
set changeName( newName){ // a parameter for re-assighning or mapping new values
this.firstname = newName; // take fisrtname and re-assign to new name
}

}

console.log(Person);//this is just an object
console.log(Person.firstName); // this is called accessing data property
console.log(Person.getName);// this is called accessing using getter method

Person.newName="Alison";
console.log(Person.firstName);
console.log(Person.newName);