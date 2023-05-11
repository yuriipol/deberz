import { db } from "./firebase/config";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  getCountFromServer,
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

export const deleteInfo = async (id) => {
  await deleteDoc(doc(db, "statistic", id));
};

export const updateInfo = async (id, data) => {
  const infoRef = doc(db, "statistic", id);
  await updateDoc(infoRef, { ...data });
};

const getCountResultGames = async (name) => {
  const countWins = query(
    collection(db, "statistic"),
    where("comand", "==", name),
    where("placeOfChamp", "==", "1 place")
  );
  const resultCountWins = await getCountFromServer(countWins);

  const countWinsCup = query(
    collection(db, "statistic"),
    where("comand", "==", name),
    where("placeOfCup", "==", "1 place")
  );
  const resultCountWinsCup = await getCountFromServer(countWinsCup);

  const data = {
    name: name,
    wins: resultCountWins.data().count,
    cups: resultCountWinsCup.data().count,
  };
  return data;
};

export const resultWins = async () => {
  const teamOne = await getCountResultGames("Polupan & Pavlov");
  const teamTwo = await getCountResultGames("Fesenko & Belik");
  const teamThree = await getCountResultGames("Novikov & Garyachov");
  const resultOfGamesWins = {
    teamOne,
    teamTwo,
    teamThree,
  };
  // console.log(resultOfGamesWins);
  return resultOfGamesWins;
};
