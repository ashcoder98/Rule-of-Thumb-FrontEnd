import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCRGX8CZ50RVBpYa5Q6zQ82frhj5fDtjIU",
    authDomain: "rule-of-thumb-31aa1.firebaseapp.com",
    projectId: "rule-of-thumb-31aa1",
    storageBucket: "rule-of-thumb-31aa1.appspot.com",
    messagingSenderId: "1009741313431",
    appId: "1:1009741313431:web:6f074b63be561905b700d2"
  };

  firebase.initializeApp(firebaseConfig);

// set up auth

const auth = firebase.auth();
const provider = new GoogleAuthProvider();


function signIn() {
    return signInWithPopup(auth, provider);
}

function signOut() {
    return auth.signOut();
}

export {
    auth,
    signIn,
    logOut
}