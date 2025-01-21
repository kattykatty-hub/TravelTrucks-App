import Camper from "../Camper/Camper";
import style from "./CampersList.module.css";
import { v4 as uuidv4 } from 'uuid';

const CampersList = ({ campers }) => {
  return (
    <ul className={style.campersList}>
      {campers.map((camper) => (
        <li key={uuidv4()}>
          <Camper camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CampersList;
