import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBgRqCXr-sU5cGMadEWlsQiH75n3Eg1HqM",
    authDomain: "crown-db-82176.firebaseapp.com",
    projectId: "crown-db-82176",
    storageBucket: "crown-db-82176.appspot.com",
    messagingSenderId: "1096396564125",
    appId: "1:1096396564125:web:e42c90b1f927b6c8591674",
    measurementId: "G-FVP0Y8JQKZ"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
if (!userAuth) return;

const userRef = firestore.doc(`users/${userAuth.uid}`);
const snapShot = await userRef.get();

if (!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
await userRef.set({
    displayName,
    email,
    createdAt,
    ...additionalData
})
    }catch(error){
    console.log('error creating user', error.message);
    }
}
return userRef;
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  
  provider.setCustomParameters({ prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;