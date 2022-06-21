import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBloPFzLv7lxLq6X7lM8ihZC4tnRdts6pQ",
    authDomain: "chat-app-f110f.firebaseapp.com",
    projectId: "chat-app-f110f",
    storageBucket: "chat-app-f110f.appspot.com",
    messagingSenderId: "216292442967",
    appId: "1:216292442967:web:9b865c28062dee5d41b412",
    measurementId: "G-45Y8FWQ7XE"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics(app);
const auth = firebase.auth(app);
const db = firebase.firestore()

export { analytics, auth, db};
export default firebase;