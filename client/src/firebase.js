// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4yHLF2CyDz9BHBPD_xwN42r86UYqHCM8",
  authDomain: "mern-estate-8a8e1.firebaseapp.com",
  projectId: "mern-estate-8a8e1",
  storageBucket: "mern-estate-8a8e1.appspot.com",
  messagingSenderId: "605901667853",
  appId: "1:605901667853:web:77b3bd4e654f54d9bcdf44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the initialized app
export { app }; // This is necessary to use `app` in other files
