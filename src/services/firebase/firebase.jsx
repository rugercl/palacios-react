import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDcxnz61pdrpaYjvbpMk9824lQvqCq0D1w",
    authDomain: "cuantotequiero-49968.firebaseapp.com",
    projectId: "cuantotequiero-49968",
    storageBucket: "cuantotequiero-49968.appspot.com",
    messagingSenderId: "917043367469",
    appId: "1:917043367469:web:00ace2524534509dfff2a4"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export function getFirestore(){    
      return firebase.firestore(app)
  }
