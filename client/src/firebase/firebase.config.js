import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCe_r1FbM81ADWwbY5c4N12loha_JUVQMA",
    authDomain: "storyfics-app.firebaseapp.com",
    databaseURL: "https://storyfics-app.firebaseio.com",
    projectId: "storyfics-app",
    storageBucket: "storyfics-app.appspot.com",
    messagingSenderId: "1004820606802",
    appId: "1:1004820606802:web:b42800008f515fbe4f548b"
};

// Initialize Firebase
const initFirebase = () => {
    try {
      firebase.initializeApp(firebaseConfig);
      console.log('Firebase initialized')
    } catch (error) {
      console.log(error);
    }
}


export default initFirebase;