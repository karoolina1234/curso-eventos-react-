import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB3Qzn78xP7-HqtVqqMTv_lOgpxS-rZsgA",
    authDomain: "eventos-f88f0.firebaseapp.com",
    projectId: "eventos-f88f0",
    storageBucket: "eventos-f88f0.appspot.com",
    messagingSenderId: "406918858401",
    appId: "1:406918858401:web:ca6421ce57091468ae12e0",
    measurementId: "G-83GN1P226H"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);
  firebase.analytics();