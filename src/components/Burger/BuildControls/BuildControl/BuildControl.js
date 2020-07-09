import React from "react";
import styles from "./BuildControl.module.css";

const BuildControl = (props) => {
  return (
    <div className={styles.buildControl}>
      <div className={styles.label}>{props.label}</div>
      <button
        className={styles.less}
        type="button"
        onClick={props.removeIngredient}
        disabled={props.disabled}
      >
        Less
      </button>
      <button
        className={styles.more}
        type="button"
        onClick={props.addIngredient}
      >
        More
      </button>
    </div>
  );
};

export default BuildControl;
