import {
  onSnapshot,
  collection,
  query,
  limit,
  getDocs,
} from "firebase/firestore";
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
  const [page, setPage] = useState(1);
  const [queryRef, setQueryRef] = useState(
    query(collection(db, "statistic"), limit(10))
  );
  const [isShow, setIsShow] = useState(true);
  const [sizeInfo, setSizeinfo] = useState(null);
  const [filter, setFilter] = useState("");

  // console.log(sizeInfo);
  const hendleSubmit = (data) => {
    uploadInfo(data);
  };
  const getInfoLength = async () => {
    const infoRef = await getDocs(collection(db, "statistic"));
    const size = infoRef.size;

    setSizeinfo(size);
  };

  useEffect(() => {
    getInfoLength();
    const unScrible = onSnapshot(
      queryRef,
      (onSnapshot) => {
        setInfo(
          onSnapshot.docs.map((item) => ({
            ...item.data(),
            id: item.id,
          }))
        );
        // console.log("SNAP:", onSnapshot.docs.length);
        // console.log(sizeInfo);

        if (onSnapshot.docs.length === sizeInfo) {
          setIsShow(false);
          return;
        }
      },
      (error) => {
        return error;
      }
    );
    return () => unScrible();
  }, [queryRef, sizeInfo]);

  const toggleModal = (event) => {
    setShowModal(!showModal);
  };

  const findIdContact = (event) => {
    const findInfo = info.find((item) => item.id === event.currentTarget.id);
    setSearchInfo(findInfo);

    if (event.target.tagName !== "BUTTON") {
      toggleModal();
    }
  };
  const filterList = info.filter((item) =>
    item.comand.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  console.log(filter);
  return (
    <div className="container">
      <FormAddWinners onSubmit={hendleSubmit} />

      <input
        type="search"
        name="filter"
        value={filter}
        onChange={(event) => {
          // console.log(event.target.value);
          setFilter(event.target.value);
        }}
        className={s.filter}
      />

      <StatisticList info={filterList} onClick={findIdContact} />
      {isShow && (
        <button
          type="button"
          onClick={() => {
            setPage((prevstate) => prevstate + 1);
            setQueryRef(
              query(collection(db, "statistic"), limit((page + 1) * 10))
            );
          }}
          className={s.loadMore}
        >
          Load more
        </button>
      )}
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
