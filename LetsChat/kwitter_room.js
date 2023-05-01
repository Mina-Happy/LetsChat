
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAI6U5Ty7tb0GHmvrjBigToAL-lplTv8Zw",
      authDomain: "letschat-25978.firebaseapp.com",
      projectId: "letschat-25978",
      storageBucket: "letschat-25978.appspot.com",
      messagingSenderId: "216076744379",
      appId: "1:216076744379:web:ef0824f625f05f8b16db9e"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
