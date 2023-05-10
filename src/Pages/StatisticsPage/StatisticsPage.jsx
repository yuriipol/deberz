import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../Shared/firebase/config";
import FormAddWinners from "../../Component/FormAddWinners/FormAddWinners";
import StatisticList from "../../Component/StatisticList/StatisticList";
import Modal from "../../Component/Modal/Modal";
import FormChangeStatInfo from "../../Component/FormChangeStatInfo/FormChangeStatInfo";
import { uploadInfo } from "../../Shared/apiDB";
import { useEffect, useState } from "react";
import s from "./StatisticsPage.module.scss";

const StatisticsPage = () => {
  const [info, setInfo] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});
  const [showModal, setShowModal] = useState(false);

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
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const findIdContact = (event) => {
    const findInfo = info.find((item) => item.id === event.currentTarget.id);
    setSearchInfo(findInfo);
    // console.log(searchInfo);
    toggleModal();
  };
  return (
    <div className="container">
      <FormAddWinners onSubmit={hendleSubmit} />
      <StatisticList info={info} onClick={findIdContact} />
      {showModal && (
        <Modal onClose={toggleModal}>
          <h2 className={s.title__change}>CHANGE STATISTIC INFO</h2>
          <p className={s.champinship}>{searchInfo.date}</p>
          <div className={s.findInfo}>
            <p className={s.champinship}>Comand name: {searchInfo.comand}</p>
            <p className={s.champinship}>
              Place of Championship: {searchInfo.placeOfChamp}
            </p>
            <p className={s.champinship}>
              Place of Cup: {searchInfo.placeOfCup}
            </p>
            {/* {(placeOfCup, placeOfChamp, date, comand, id)} */}
          </div>
          <button
            type="button"
            onClick={toggleModal}
            className={s.modal__close}
          >
            close
          </button>
          <FormChangeStatInfo onClose={toggleModal} findContact={searchInfo} />
        </Modal>
      )}
    </div>
  );
};

export default StatisticsPage;
