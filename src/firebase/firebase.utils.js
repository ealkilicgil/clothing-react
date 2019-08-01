import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBYr0XJ_oQWG6kCDkktQCXiGx7Zd2Fglfg",
    authDomain: "clothing-db-fd4c9.firebaseapp.com",
    databaseURL: "https://clothing-db-fd4c9.firebaseio.com",
    projectId: "clothing-db-fd4c9",
    storageBucket: "",
    messagingSenderId: "747293651146",
    appId: "1:747293651146:web:2136e4a29af03a22"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;