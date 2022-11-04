// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";

import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyC_-KveAPC-K_QBQqp8qMwWsV6KF0EXQ9k",
//     authDomain: "instagram-clone-ccc60.firebaseapp.com",
//     databaseURL: "https://instagram-clone-ccc60-default-rtdb.firebaseio.com",
//     projectId: "instagram-clone-ccc60",
//     storageBucket: "instagram-clone-ccc60.appspot.com",
//     messagingSenderId: "707710779463",
//     appId: "1:707710779463:web:c5ab5e2ecd46b87c463162",
//     measurementId: "G-BDQMXYNXQM"

// })

const firebaseConfig = {
    apiKey: "AIzaSyC_-KveAPC-K_QBQqp8qMwWsV6KF0EXQ9k",
    authDomain: "instagram-clone-ccc60.firebaseapp.com",
    databaseURL: "https://instagram-clone-ccc60-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-ccc60",
    storageBucket: "instagram-clone-ccc60.appspot.com",
    messagingSenderId: "707710779463",
    appId: "1:707710779463:web:c5ab5e2ecd46b87c463162",
    measurementId: "G-BDQMXYNXQM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
// const storage = firebase.storage();

export {db, auth};

