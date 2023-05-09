import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../Shared/firebase/config";
import FormAddWinners from "../../Component/FormAddWinners/FormAddWinners";
import StatisticList from "../../Component/StatisticList/StatisticList";
import { uploadInfo } from "../../Shared/apiDB";
import { useEffect, useState } from "react";

const StatisticsPage = () => {
  const [info, setInfo] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});
  const hendleSubmit = (data) => {
    uploadInfo(data);
  };
  useEffect(() => {
    const infoRef = collection(db, "statistic");
    const unScrible = onSnapshot(
      infoRef,
      (onSnapshot) => {
        setInfo(
          onSnapshot.docs.map((item) => ({ ...item.data(), id: item.id }))
        );
      },
      (error) => {
        return error;
      }
    );
    return () => unScrible();
  }, []);
  // console.log(info);

  const findIdContact = (event) => {
    const searchInfo = info.find((item) => item.id === event.currentTarget.id);
    setSearchInfo(searchInfo);
    // console.log(searchInfo);
    // toggleModal();
  };
  return (
    <div className="container">
      <FormAddWinners onSubmit={hendleSubmit} />
      <StatisticList info={info} onClick={findIdContact} />
    </div>
  );
};

export default StatisticsPage;
