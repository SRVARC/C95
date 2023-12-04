
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBB6kbO3u8GAaTFrnYB1jbNelZopnVrm6w",
    authDomain: "let-chat-web-app-1f9de.firebaseapp.com",
    databaseURL : "https://let-chat-web-app-1f9de-default-rtdb.firebaseio.com/",
    projectId: "let-chat-web-app-1f9de",
    storageBucket: "let-chat-web-app-1f9de.appspot.com",
    messagingSenderId: "345695746017",
    appId: "1:345695746017:web:90bc5d8fb0af01a0a5c4a0"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig); 

  user_name = localStorage.getItem("user_name");

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name -" + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;

   //End code
   });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}