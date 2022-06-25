const firebaseConfig = {
      apiKey: "AIzaSyAp8JKJ002aNIr9coAumygEecvkqJbj3ho",
      authDomain: "kwitter-5ccd4.firebaseapp.com",
      databaseURL: "https://kwitter-5ccd4-default-rtdb.firebaseio.com",
      projectId: "kwitter-5ccd4",
      storageBucket: "kwitter-5ccd4.appspot.com",
      messagingSenderId: "173010916991",
      appId: "1:173010916991:web:c6f5f71b2e48b424d1914a"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
