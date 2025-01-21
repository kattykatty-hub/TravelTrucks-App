import React from "react";
import css from "./MainButton.module.css";

const MainButton = ({ label, onClick }) => {
  return (
    <button className={css.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default MainButton;
