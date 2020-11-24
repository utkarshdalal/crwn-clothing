import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB0uATPKcL4hddPW8g16OiybFZLz3rp9XQ",
    authDomain: "crwn-db-136be.firebaseapp.com",
    databaseURL: "https://crwn-db-136be.firebaseio.com",
    projectId: "crwn-db-136be",
    storageBucket: "crwn-db-136be.appspot.com",
    messagingSenderId: "886743243226",
    appId: "1:886743243226:web:b36c81ebe0c9590c4748e3",
    measurementId: "G-H7PBC4JQ89"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;