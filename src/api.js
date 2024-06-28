import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA7xz89S3Vg58BWo4dStih-c9LwhqXor70",
  authDomain: "xplore-ac3d0.firebaseapp.com",
  projectId: "xplore-ac3d0",
  storageBucket: "xplore-ac3d0.appspot.com",
  messagingSenderId: "263990423331",
  appId: "1:263990423331:web:e731840b0ff05e28762696",
  measurementId: "G-KTDQL45J20",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const staysCollectionRef = collection(db, "stays");
export async function getStays() {
  const snapshot = await getDocs(staysCollectionRef);
  const stays = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return stays;
}

export async function getStay(id) {
  const docRef = doc(db, "stays", id);
  const snapshot = await getDoc(docRef);
  return {
    ...snapshot.data(),
    id: snapshot.id,
  };
}
