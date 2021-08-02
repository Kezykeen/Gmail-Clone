import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCVzmjQ_4ShDvZzjnBpbtu48rwEN4QGMZE",
  authDomain: "clone-5c4e8.firebaseapp.com",
  projectId: "clone-5c4e8",
  storageBucket: "clone-5c4e8.appspot.com",
  messagingSenderId: "191327645033",
  appId: "1:191327645033:web:a682138b403822f76fa1f8",
  measurementId: "G-DTK5VY2HKK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
