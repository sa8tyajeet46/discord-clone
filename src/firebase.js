import firebase from 'firebase/compat/app';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAKRa35E2UHaI-WMdTWS24n06W22VdHVM8",
  authDomain: "discord-aa4b1.firebaseapp.com",
  projectId: "discord-aa4b1",
  storageBucket: "discord-aa4b1.appspot.com",
  messagingSenderId: "9839331375",
  appId: "1:9839331375:web:e9c26a4054e9e6af4d9eda",
  measurementId: "G-M9JTJ2K87Q"
};

 const app=firebase.initializeApp(firebaseConfig);
 const auth=getAuth(app);
 const db=getFirestore(app);
     const res=new GoogleAuthProvider();
export  {auth,db,res};