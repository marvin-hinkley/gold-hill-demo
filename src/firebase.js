import firebase from 'firebase';
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyCR7D6ve0OOO-yY5GhaYPHDBoKnu0rcVmk",
  authDomain: "gold-hill-demo.firebaseapp.com",
  databaseURL: "https://gold-hill-demo.firebaseio.com",
  projectId: "gold-hill-demo",
  storageBucket: "gold-hill-demo.appspot.com",
  messagingSenderId: "redacted"
};
firebase.initializeApp(config);

const database = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

export {
  database,
  auth,
  currentUser
}