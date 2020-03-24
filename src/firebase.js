import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyDpHsgz5ebjb4kfGEWQ4F-64PJy8WH8nD8",
    authDomain: "bt3103cafe.firebaseapp.com",
    databaseURL: "https://bt3103cafe.firebaseio.com",
    projectId: "bt3103cafe",
    storageBucket: "bt3103cafe.appspot.com",
    messagingSenderId: "1065777669185",
    appId: "1:1065777669185:web:f29379b6b9a731703b12c0"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;