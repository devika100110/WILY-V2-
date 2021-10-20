import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCLGtyGoq9tbASV0y8_R6asBUAc5yZRUdQ",
  authDomain: "wily-af5ca.firebaseapp.com",
  projectId: "wily-af5ca",
  storageBucket: "wily-af5ca.appspot.com",
  messagingSenderId: "889352568310",
  appId: "1:889352568310:web:5461d6fa9f6d1e1ea65bd7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
