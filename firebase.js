import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBO3ZcKmuHJ2_Gr64zcrOfZkNELe7XEfVQ",
  authDomain: "todoapp-7a8a5.firebaseapp.com",
  projectId: "todoapp-7a8a5",
  storageBucket: "todoapp-7a8a5.appspot.com",
  messagingSenderId: "540718283882",
  appId: "1:540718283882:web:f6c6f335918f9264d0de13",
  measurementId: "G-DKR97SKSW5",
};

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
const auth = getAuth();

export { auth, db };
