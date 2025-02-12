import { db } from "../firebase.config";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";

export const saveUserProfile = async (userId, userData) => {
  return await setDoc(doc(collection(db, "users"), userId), userData);
};

export const getUserProfile = async (userId) => {
  const userDoc = await getDoc(doc(collection(db, "users"), userId));
  return userDoc.exists() ? userDoc.data() : null;
};
