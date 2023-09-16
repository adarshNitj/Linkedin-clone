import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDcKZYCsJqMnHnPfVjZ0LBaH3hKWr29oF4",
    authDomain: "linkedin-clone-ecbbe.firebaseapp.com",
    projectId: "linkedin-clone-ecbbe",
    storageBucket: "linkedin-clone-ecbbe.appspot.com",
    messagingSenderId: "433089924621",
    appId: "1:433089924621:web:2392f3aedfc5d5b4588f44"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth };