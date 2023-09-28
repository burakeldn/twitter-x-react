import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAwOX6sS9SOkSdBHTc3g8LSkOewfvyO8aE",
  authDomain: "twitter-x-react.firebaseapp.com",
  projectId: "twitter-x-react",
  storageBucket: "twitter-x-react.appspot.com",
  messagingSenderId: "69641057856",
  appId: "1:69641057856:web:60a9fba9c5cd5d99a6d1a5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);

export {db, auth};