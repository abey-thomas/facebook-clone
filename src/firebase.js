import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBpZv1njO_LHpYtrC4T5trwQsD0TPuCEUU',
  authDomain: 'facebook-clone-ff67d.firebaseapp.com',
  databaseURL: 'https://facebook-clone-ff67d.firebaseio.com',
  projectId: 'facebook-clone-ff67d',
  storageBucket: 'facebook-clone-ff67d.appspot.com',
  messagingSenderId: '690438405330',
  appId: '1:690438405330:web:fb4fed8ada86d95e1a010b',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
