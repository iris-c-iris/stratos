
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxUtxGL54CpPcc6GvrE0Uuyo8pc_gYFt8",
  authDomain: "stratos-wms.firebaseapp.com",
  projectId: "stratos-wms",
  storageBucket: "stratos-wms.appspot.com",
  messagingSenderId: "1051601189992",
  appId: "1:1051601189992:web:aceb1805e16673a56f0fdd"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export const auth = getAuth(app);