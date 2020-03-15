import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyCPTGEftf-dsAogrWJwna7B_81oUoe3j1c",
    authDomain: "tacotoyousday.firebaseapp.com",
    databaseURL: "https://tacotoyousday.firebaseio.com",
    projectId: "tacotoyousday",
    storageBucket: "tacotoyousday.appspot.com",
    messagingSenderId: "39754624185",
    appId: "1:39754624185:web:e7a0f4b62ecc8e1fac7f68",
    measurementId: "G-SPQ7P0ENBL"
  };
  // Initialize Firebase

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;