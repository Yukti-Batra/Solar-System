import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCqyocGJvlytZenFIlTEnft3c7Jp3CpkQA",
  authDomain: "solar-system-82514.firebaseapp.com",
  projectId: "solar-system-82514",
  storageBucket: "solar-system-82514.appspot.com",
  messagingSenderId: "110472679956",
  appId: "1:110472679956:web:ba3c6b7acabd9e305c0d01",
  measurementId: "G-1BD82CDBTH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Function to save solar system configuration
const saveConfig = async (planets) => {
  try {
    if (!planets || typeof planets !== "object") {
      throw new Error("Invalid planets data");
    }

    const docRef = await addDoc(collection(db, "solar-configs"), {
      planets,
      timestamp: serverTimestamp(), // Use Firestore server timestamp
    });
    console.log("Configuration saved with ID: ", docRef.id);
  } catch (error) {
    console.error("Error saving configuration: ", error);
  }
};

// Function to load saved configurations
const loadConfigs = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "solar-configs"));
    const configs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return configs;
  } catch (error) {
    console.error("Error loading configurations: ", error);
    return [];
  }
};

export { db, saveConfig, loadConfigs };