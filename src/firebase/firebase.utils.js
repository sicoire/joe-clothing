import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyClAfbf5qZRaFg62hkASl82lAhw1A7iODg",
    authDomain: "joe-db-8e4cd.firebaseapp.com",
    projectId: "joe-db-8e4cd",
    storageBucket: "joe-db-8e4cd.appspot.com",
    messagingSenderId: "995999428902",
    appId: "1:995999428902:web:48b659f8d2918c898b51e7",
    measurementId: "G-Z43RJJ61W4"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;