import { useState } from "react";
import DatePicker from "react-datepicker";
import { updateInfo } from "../../Shared/apiDB";

import "react-datepicker/dist/react-datepicker.css";

import s from "./FormChangeStatInfo.module.scss";

const FormChangeStatInfo = ({ findContact }) => {
  const comands = [
    "choose a team...",
    "Polupan & Pavlov",
    "Fesenko & Belik",
    "Novikov & Garyachov",
  ];
  const places = ["choose a place...", "1 place", "2 place", "3 place"];
  const [comand, setComand] = useState("");
  const [placeOfChamp, setPlaceOfChamp] = useState("");
  const [placeOfCup, setPlaceOfCup] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const hendleSubmit = (event) => {
    event.preventDefault();
    const data = {
      date: startDate.toDateString(),
      comand,
      placeOfChamp: placeOfChamp,
      placeOfCup: placeOfCup,
    };
    // console.log(data);
    updateInfo(findContact.id, data);

    resetForm();
  };

  const resetForm = () => {
    setComand("");
    setPlaceOfChamp("");
    setPlaceOfCup("");
  };

  const optionsComands = comands.map((comand, index) => {
    return (
      <option key={index} value={comand}>
        {comand}
      </option>
    );
  });
  const optionsPlaces = places.map((place, index) => {
    return (
      <option key={index} value={place}>
        {place}
      </option>
    );
  });
  return (
    <div className="container">
      <form onSubmit={hendleSubmit} className={s.form}>
        <div className={s.addForm}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd.MM.yyyy"
            className={s.datePicker}
          />
          <select
            value={comand}
            onChange={(event) => setComand(event.target.value)}
            className={s.select}
          >
            {optionsComands}
          </select>
          <select
            value={placeOfChamp}
            onChange={(event) => setPlaceOfChamp(event.target.value)}
            className={s.select}
          >
            {optionsPlaces}
          </select>
          <select
            value={placeOfCup}
            onChange={(event) => setPlaceOfCup(event.target.value)}
            className={s.select}
          >
            {optionsPlaces}
          </select>
        </div>
        <button type="submit" className={s.addStat}>
          Change info
        </button>
      </form>
    </div>
  );
};

export default FormChangeStatInfo;
