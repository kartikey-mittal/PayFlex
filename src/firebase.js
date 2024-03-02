import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAAqOETGoS3A9wUln1yXd0cqkLJl31WE8Y",
  authDomain: "payflex-c49ce.firebaseapp.com",
  projectId: "payflex-c49ce",
  storageBucket: "payflex-c49ce.appspot.com",
  messagingSenderId: "221872262248",
  appId: "1:221872262248:web:555f3872af1246a4467fdd",
  measurementId: "G-4CBJTJRJBB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };