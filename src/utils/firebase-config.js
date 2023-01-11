
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBh-Yaqqj59b1sli6iOZnQQuQTSGvSLO4k",
  authDomain: "react-netflix-7cb42.firebaseapp.com",
  projectId: "react-netflix-7cb42",
  storageBucket: "react-netflix-7cb42.appspot.com",
  messagingSenderId: "1000050648223",
  appId: "1:1000050648223:web:8910fd3f7c2f804d562eaa",
  measurementId: "G-6Z4M9MRX29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
