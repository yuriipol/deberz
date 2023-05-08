import { auth } from "./firebase/config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const login = async ({ email, password }) => {
  await signInWithEmailAndPassword(auth, email, password);
  const user = auth.currentUser;
  const userInfo = {
    id: user.uid,
    name: user.displayName,
    email: user.email,
  };
  return userInfo;
};
export const singUp = async ({ email, password, name }) => {
  await createUserWithEmailAndPassword(auth, email, password, name);
  await updateProfile(auth.currentUser, { displayName: name });
  const user = auth.currentUser;
  const userInfo = {
    id: user.uid,
    name: user.displayName,
    email: user.email,
  };
  return userInfo;
};

export const logout = async () => {
  await signOut(auth);
};
// state = {
//   id,
//   name,
//   email,
// };
