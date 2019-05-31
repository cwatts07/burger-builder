import React from 'react';

import styles from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientName => {
      return [...Array(props.ingredients[ingredientName])]
        .map((_,i)=> <BurgerIngredient type={ingredientName} key={ingredientName + i}/>)
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);
  if(transformedIngredients.length === 0){
    transformedIngredients=<p>Please start adding ingredients</p>
  }
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type={'bread-top'}/>
      {transformedIngredients}
      <BurgerIngredient type={'bread-bottom'}/>
    </div>
  );
};

export default Burger;
