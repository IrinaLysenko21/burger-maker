import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import styles from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
];

const BuildsControls = (props) => {
  return (
    <div className={styles.buildControls}>
      <p className={styles.price}>Current price: ${props.price.toFixed(2)}</p>
      {controls.map((control) => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            addIngredient={() => props.addIngredient(control.type)}
            removeIngredient={() => props.removeIngredient(control.type)}
            disabled={props.disabledInfo[control.type]}
          />
        );
      })}
      <button className={styles.orderButton} type="button">
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildsControls;
