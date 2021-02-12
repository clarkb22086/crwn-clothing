import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCOP3knkkGoXFik_mDKYd9xQbNWfxeU5Vs",
    authDomain: "crwn-db-ec07e.firebaseapp.com",
    projectId: "crwn-db-ec07e",
    storageBucket: "crwn-db-ec07e.appspot.com",
    messagingSenderId: "212941460446",
    appId: "1:212941460446:web:8ac9f03431592e6ebb834f",
    measurementId: "G-W2C7NEJBHN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;