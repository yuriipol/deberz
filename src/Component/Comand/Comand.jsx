import s from "./comand.module.scss";

const Comand = ({
  nameComand,
  userFotoOne,
  userFotoTwo,
  fioOne,
  fioTwo,
  countOfWin,
  countOfCups,
}) => {
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
      </div>
      <p className={s.countOfWin}>Wins:{countOfWin}</p>
      <p className={s.countOfCups}>Cups:{countOfCups}</p>
    </div>
  );
};

export default Comand;
