import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyB2I2NgI3k6E8y804DiAeOI5S6zqc1QX9g",
    authDomain: "complait.firebaseapp.com",
    projectId: "complait",
    storageBucket: "complait.appspot.com",
    messagingSenderId: "222724225683",
    appId: "1:222724225683:web:aabd59b00a94dfd8aeab66"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


