import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyB3b2ESP7_csUIU1DLfvHn_rl0sW0XYNIQ",
  authDomain: "netflix-clone-6fbb4.firebaseapp.com",
  projectId: "netflix-clone-6fbb4",
  storageBucket: "netflix-clone-6fbb4.appspot.com",
  messagingSenderId: "517869344494",
  appId: "1:517869344494:web:af113a74ee02e4c76c05ff"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);


export { firebase };