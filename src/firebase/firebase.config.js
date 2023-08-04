// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9zMVmq9E_n-baYo3irlUl2Dcx86yWtXU",
  authDomain: "assaignment-12-e4540.firebaseapp.com",
  projectId: "assaignment-12-e4540",
  storageBucket: "assaignment-12-e4540.appspot.com",
  messagingSenderId: "860621574664",
  appId: "1:860621574664:web:8bb73d2f5ab6b9417177bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
