// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCafNAao93_kHl-tVn1WfHzfF-51mmbl3A",
  authDomain: "assaignment-12-client-site.firebaseapp.com",
  projectId: "assaignment-12-client-site",
  storageBucket: "assaignment-12-client-site.appspot.com",
  messagingSenderId: "914801515280",
  appId: "1:914801515280:web:33e5600d22b3caf31d6395"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
