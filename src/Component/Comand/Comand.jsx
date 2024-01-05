import s from "./comand.module.scss";
// import player from "../../Shared/Images/Home/reserve player.jpg";

const Comand = ({
  nameComand,
  userFotoOne,
  userFotoTwo,
  userFotoThree,
  fioOne,
  fioTwo,
  fioThree,
  countOfWin,
  countOfCups,
}) => {
// const playerFinder = (userFotoThree) => {
//   if (!userFotoThree) {
//     return player;
//   }
//   return userFotoThree;
// }
  return (
    <div className={s.card}>
      <h2 className={s.titleComand}>{nameComand}</h2>
      <div className={s.containerFotos}>
        <div className={s.user}>
          <img src={userFotoOne} alt="foto" className={s.avatar} />
          <p className={s.fio}>{fioOne}</p>
        </div>
        <div className={s.user}>
          <img src={userFotoTwo} alt="foto" className={s.avatar} />
          <p className={s.fio}>{fioTwo}</p>
        </div>
        <div className={s.user}>

         {userFotoThree && <img src={userFotoThree} alt="foto" className={s.avatar} />}
          {fioThree && <p className={s.fio}>{fioThree}</p>}
        </div>
      </div>
      <p className={s.countOfWin}>Wins: {countOfWin}</p>
      <p className={s.countOfCups}>Cups: {countOfCups}</p>
    </div>
  );
};

export default Comand;
