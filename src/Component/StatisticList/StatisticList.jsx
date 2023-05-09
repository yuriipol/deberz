import s from "./StatisticList.module.scss";

const StatisticList = ({ info, onDeleteInfoListItem, onClick }) => {
  return (
    <ol className={s.list}>
      {info.map(({ id, date, comand, placeOfChamp, placeOfCup }) => (
        <li key={id} id={id} className={s.infoListItem} onClick={onClick}>
          <p className={s.info}>{date}</p>
          <p className={s.info}>{comand}</p>
          <p className={s.info}>Championship: {placeOfChamp}</p>
          <p className={s.info}>Cup: {placeOfCup}</p>
          <button
            className={s.buttonDelete}
            onClick={() => onDeleteInfoListItem(id)}
          >
            remove
          </button>
        </li>
      ))}
    </ol>
  );
};

export default StatisticList;
