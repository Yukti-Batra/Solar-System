import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCqyocGJvlytZenFIlTEnft3c7Jp3CpkQA",
  authDomain: "solar-system-82514.firebaseapp.com",
  projectId: "solar-system-82514",
  storageBucket: "solar-system-82514.appspot.com",
  messagingSenderId: "110472679956",
  appId: "1:110472679956:web:ba3c6b7acabd9e305c0d01",
  measurementId: "G-1BD82CDBTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };