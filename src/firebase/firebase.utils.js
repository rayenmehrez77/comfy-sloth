import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB9kCZWLXDSnEH80FO4EW71eJ_ptin9WYc",
  authDomain: "comfy-sloth.firebaseapp.com",
  projectId: "comfy-sloth",
  storageBucket: "comfy-sloth.appspot.com",
  messagingSenderId: "378528185754",
  appId: "1:378528185754:web:f45fde2a7e33bfcab1ce23",
  measurementId: "G-J65GD2S8D2",
};

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   const userRef = firestore.doc(`users/${userAuth.uid}`);

//   const snapshot = await userRef.get();

//   if (!snapshot.exists) {
//     console.log(userAuth);
//     const { displayName, email, photoURL } = userAuth;

//     const createAt = new Date();

//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createAt,
//         photoURL,
//         ...additionalData,
//       });
//     } catch (error) {
//       console.log("Error creating user", error.message);
//     }
//   }

//   return userRef;
// };

// Initialize the app
firebase.initializeApp(config);

// Exporting the authentication and the database (firestore)
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Authentication with google

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
