import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Comand from "../../Component/Comand/Comand";
import UserMenu from "../../Component/UserMenu/UserMenu";
import polupan from "../../Shared/Images/Home/Polupan.jpg";
import belik from "../../Shared/Images/Home/Belik.jpg";
import pavlov from "../../Shared/Images/Home/Pavlov.png";
import shiha from "../../Shared/Images/Home/Bunny.jpg";
import garyachov from "../../Shared/Images/Home/garyachov.png";
import fesenko from "../../Shared/Images/Home/Fesenko.png";
import novikov from "../../Shared/Images/Home/Novikov.png";
import cup1 from "../../Shared/Images/Home/fotos/cup.jpg";
import cup2 from "../../Shared/Images/Home/fotos/cup2.jpg";
import cup3 from "../../Shared/Images/Home/fotos/campions.jpg";
import cup4 from "../../Shared/Images/Home/fotos/teams.jpg";
import cup5 from "../../Shared/Images/Home/fotos/winners.jpg";
import cup6 from "../../Shared/Images/Home/fotos/king.jpg"
import { resultWins } from "../../Shared/apiDB";
// import useAuth from "../../Shared/hooks/useAuth";

import s from "./HomePage.module.scss";

const HomePage = () => {
  const [result, setResult] = useState({});

  useEffect(() => {
    resultWins().then((data) => {
      setResult(data);
    });
  }, []);

  console.log(result);

  return (
    <div className="container">
      <div className={s.headerPage}>
        <NavLink to="/statistics" className={s.statLink}>
          Statistics
        </NavLink>

        <UserMenu />
      </div>
      <h1 className={s.title}>teams</h1>
      <div className={s.gallery}>
        <Comand
          nameComand="Polupan & Pavlov & Shikhovtsov"
          userFotoOne={polupan}
          userFotoTwo={pavlov}
          userFotoThree={shiha}
          fioOne="Yurii Polupan"
          fioTwo="Serhii Pavlov"
          fioThree="Oleksandr Shikhovtsov"
          countOfWin={result?.teamOne?.wins}
          countOfCups={result?.teamOne?.cups}
        />
        <Comand
          nameComand="Novikov & Belik"
          userFotoOne={novikov}
          userFotoTwo={belik}
          fioOne="Oleksandr Novikov"
          fioTwo="Oleksandr Belik"
          countOfWin={result?.teamTwo?.wins}
          countOfCups={result?.teamTwo?.cups}
        />
        <Comand
          nameComand="Fesenko & Garyachov"
          userFotoOne={fesenko}
          userFotoTwo={garyachov}
          fioOne="Mikhail Fesenko"
          fioTwo="Yurii Garyachov"
          countOfWin={result?.teamThree?.wins}
          countOfCups={result?.teamThree?.cups}
        />
      </div>
      <h1 className={s.title}>foto after games</h1>
      <div className={s.fotos}>
        <img src={cup1} alt="foto" className={s.foto} />
        <img src={cup2} alt="foto" className={s.foto} />
        <img src={cup3} alt="foto" className={s.foto} />
        <img src={cup4} alt="foto" className={s.foto} />
        <img src={cup5} alt="foto" className={s.foto} />
        <img src={cup6} alt="foto" className={s.foto} />
      </div>
    </div>
  );
};

export default HomePage;
