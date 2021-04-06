import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBHnj3vNgjeSUwtSGax7ymT5P-i370VQ6g",
    authDomain: "crwn-db-94c33.firebaseapp.com",
    projectId: "crwn-db-94c33",
    storageBucket: "crwn-db-94c33.appspot.com",
    messagingSenderId: "998167621458",
    appId: "1:998167621458:web:266cd9c90439c9bc7dd48b",
    measurementId: "G-GBKTVWP2ZE"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
