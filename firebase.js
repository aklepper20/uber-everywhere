import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLQ6hODszhw63PN9cc_lke-0QscAR7qqA",
  authDomain: "uber-e4a4c.firebaseapp.com",
  projectId: "uber-e4a4c",
  storageBucket: "uber-e4a4c.appspot.com",
  messagingSenderId: "883013396387",
  appId: "1:883013396387:web:99a1f227c0a4dcc677dc16",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
