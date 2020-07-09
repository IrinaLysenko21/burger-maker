import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import styles from "./BurgerBuilder.module.css";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };

  addIngredient = (type) => {
    this.setState((prevState) => ({
      ...this.state,
      ingredients: {
        ...this.state.ingredients,
        [type]: prevState.ingredients[type] + 1,
      },

      totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type],
    }));
  };

  removeIngredient = (type) => {
    if (this.state.ingredients[type] <= 0) return;

    this.setState((prevState) => ({
      ...this.state,
      ingredients: {
        ...this.state.ingredients,
        [type]: prevState.ingredients[type] - 1,
      },

      totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type],
    }));
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };

    for (let disabled in disabledInfo) {
      disabledInfo[disabled] = disabledInfo[disabled] <= 0;
    }

    return (
      <Auxiliary>
        <div className={styles.wrapper}>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            addIngredient={this.addIngredient}
            removeIngredient={this.removeIngredient}
            disabledInfo={disabledInfo}
            price={this.state.totalPrice}
          />
        </div>
      </Auxiliary>
    );
  }
}
