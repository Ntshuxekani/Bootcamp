function talk(){
    var know = {
        "Hello" : "Hi There &#128540" ,
        "Who are you?" : "My name is Alison",
        "How are you?" : "I am good :-)",
        "What can i do for you?" : "Give us a follow and a like",
        "Your followers?" : "I have 1000 likes, no followers yet",
        "Okay" : "Thanks for the convo",
        "Bye" : "Okay! We will talk soon, was nice chatting with you"
     }
     var user=document.getElementById('userBox').value;//get the user input
     document.getElementById('chatLog').innerHTML=user + "<br>";

     if(user in know){//mapping what we are saying to the chatbox
          document.getElementById('chatLog').innerHTML=know[user] + "<br>";


     }else {
        document.getElementById('chatLog').innerHTML="Sorry i do not understand <br>"
     }
}