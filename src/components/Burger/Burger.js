import React from 'react';

import styles from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientName => {
      return [...Array(props.ingredients[ingredientName])]
        .map((_,i)=> <BurgerIngredient type={ingredientName} key={ingredientName + i}/>)
    });
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type={'bread-top'}/>
      {transformedIngredients}
      <BurgerIngredient type={'bread-bottom'}/>
    </div>
  );
};

export default Burger;
