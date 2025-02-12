import { auth, db } from "../firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updateProfile, sendEmailVerification  } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";

export const signUpWithEmail = async (email, password, firstName, lastName) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  await updateProfile(user, {
    displayName: `${firstName} ${lastName}`,
  });

  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    firstName: firstName,
    lastName: lastName,
    email: email,
  });

  await sendEmailVerification(userCredential.user);

  return userCredential;
};

export const loginWithEmail = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};

export const logout = async () => {
  return await signOut(auth);
};
