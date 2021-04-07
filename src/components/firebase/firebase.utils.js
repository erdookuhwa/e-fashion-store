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

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
