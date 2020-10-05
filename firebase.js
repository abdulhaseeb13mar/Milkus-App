import firebase from 'firebase/app';
// import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

import firebaseConfig from './firebaseConfig.json';

firebase.initializeApp(firebaseConfig);
console.log('firebase initialize');
const auth = firebase.auth();
// const database = firebase.firestore();
const database = firebase.database();

export {auth, database};

// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';
// import 'firebase/storage';
// import 'firebase/firestore';
// import firebaseConfig from './firebaseConfig.json';

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
//   console.log('firebase initalzed');
// }

// export default firebase;
