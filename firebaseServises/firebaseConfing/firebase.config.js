// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from '@firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getDatabase} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDeghJgaTBdGgak2f1ot4K45ZpRmjimYMU",
  authDomain: "projetchat-2fd7f.firebaseapp.com",
  projectId: "projetchat-2fd7f",
  storageBucket: "projetchat-2fd7f.appspot.com",
  messagingSenderId: "222498476605",
  appId: "1:222498476605:web:2eee66622f2105d528d054",
  measurementId: "G-8BWJNPPK98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)
const database = getDatabase(app);
export {auth,db,database}