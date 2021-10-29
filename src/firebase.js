import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBkVrS44CPcd2UH2MtrW5UKPedDnojOa5M",
  authDomain: "dcot-bc246.firebaseapp.com",
  projectId: "dcot-bc246",
  storageBucket: "dcot-bc246.appspot.com",
  messagingSenderId: "961045846601",
  appId: "1:961045846601:web:670621109b59a04244fd98",
  measurementId: "G-4C0PXC7RSH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export { auth, googleProvider, signInWithEmailAndPassword, registerWithEmailAndPassword};
export default db;