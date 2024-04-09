let school = { 
    name: "Secunda Secondary School",
    established: "1998",
    location : "Mpumalanga",
    learners: 100,

    //create a function that fetches school properties and attributes
    displayinfo: function(){
        console.log(`The name of school is ${school.name} \n located at 
        ${school.location} established in ${school.established}`);
  
      
    }, //end of function

    hardData: function (){
    console.log("The name of the school is" + school.name + "\n" + "locate at" + school.location + "\n" + "established in "+ school.established);
    },

    notationData : function(){
        console.log("The name of school" + school['name']+ "\n" +
        "located at " + school['established']);
    }
}// end of object
school.displayinfo();
school.hardData();
school.notationData();