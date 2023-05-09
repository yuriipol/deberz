import { db } from "./firebase/config";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export const uploadInfo = async (data) => {
  try {
    const { date, comand, placeOfChamp, placeOfCup } = data;

    await addDoc(collection(db, "statistic"), {
      date,
      comand,
      placeOfChamp,
      placeOfCup,
    });
  } catch (error) {
    console.log(error);
  }
};
