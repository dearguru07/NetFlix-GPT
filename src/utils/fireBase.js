// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3d7LaL2u3uQIpyU_Zfp4-v-GgiSIC3W0",
  authDomain: "netflix-gpt-a2f16.firebaseapp.com",
  projectId: "netflix-gpt-a2f16",
  storageBucket: "netflix-gpt-a2f16.firebasestorage.app",
  messagingSenderId: "829737355234",
  appId: "1:829737355234:web:d7997ad820bb40e7285bbb",
  measurementId: "G-C2T3KL1QF5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// {
//   "hosting": {
//     "public": "build",
//     "ignore": [
//       "firebase.json",
//       "**/.*",
//       "**/node_modules/**"
//     ]
//   }
// }
