import Comand from "../../Component/Comand/Comand";
import polupan from "../../Shared/Images/Home/Polupan.jpg";
import belik from "../../Shared/Images/Home/Belik.jpg";
// import { comands } from "./comands";
import s from "./HomePage.module.scss";

const HomePage = () => {
  // console.log(comands);
  return (
    <div className="container">
      <h1 className={s.title}>teams</h1>
      <div className={s.gallery}>
        <Comand
          nameComand="Polupan & Belik"
          userFotoOne={polupan}
          userFotoTwo={belik}
          fioOne="Yurii Polupan"
          fioTwo="Oleksandr Belik"
          countOfWin="20"
          countOfCups="10"
        />
        <Comand
          nameComand="Polupan & Belik"
          userFotoOne={polupan}
          userFotoTwo={belik}
          fioOne="Yurii Polupan"
          fioTwo="Oleksandr Belik"
          countOfWin="20"
          countOfCups="10"
        />
        <Comand
          nameComand="Polupan & Belik"
          userFotoOne={polupan}
          userFotoTwo={belik}
          fioOne="Yurii Polupan"
          fioTwo="Oleksandr Belik"
          countOfWin="20"
          countOfCups="10"
        />
      </div>
    </div>
  );
};

export default HomePage;
