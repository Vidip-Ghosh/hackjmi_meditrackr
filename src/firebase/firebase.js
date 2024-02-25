import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFQab7LytnQNqCs61M-OTkRuSiBgo_A74",
  authDomain: "jsontofirebase-6ddbd.firebaseapp.com",
  databaseURL: "https://jsontofirebase-6ddbd-default-rtdb.firebaseio.com",
  projectId: "jsontofirebase-6ddbd",
  storageBucket: "jsontofirebase-6ddbd.appspot.com",
  messagingSenderId: "231116578149",
  appId: "1:231116578149:web:172e4b8b4197ff5464558c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
