
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBk87qQZ0xk7A24jphH_otMlNRd5l8Vf8o",
      authDomain: "kwitter-15429.firebaseapp.com",
      projectId: "kwitter-15429",
      storageBucket: "kwitter-15429.appspot.com",
      messagingSenderId: "796276761759",
      appId: "1:796276761759:web:341442fc24d19ee497eeaa"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
