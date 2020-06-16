import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import firebaseConfig from '../../firebaseConfig.json';

class Service {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    }
  }
}

export default Service;
