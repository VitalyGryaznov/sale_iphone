import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCSXWNbUv0Ye_I-wo877BQsT-3i4E5vW9k",
    authDomain: "mein-iphone-verkaufen.firebaseapp.com",
    projectId: "mein-iphone-verkaufen",
    storageBucket: "mein-iphone-verkaufen.appspot.com",
    messagingSenderId: "272837589489",
    appId: "1:272837589489:web:b334f93447a8fdf882ac50"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

