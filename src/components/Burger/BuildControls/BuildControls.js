import React from 'react';
import PropTypes from 'prop-types';

import styles from './BuildControls.module.css';
import BuildControl from "./BuildControl/BuildControl";

const controls =[
  {label:'Salad', type: 'salad'},
  {label:'Bacon', type: 'bacon'},
  {label:'Meat', type: 'meat'},
  {label:'Cheese', type: 'cheese'},
];

const BuildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      <p>Current Price: {props.price.toFixed(2)}</p>
      {controls.map(control => (
        <BuildControl
          key={control.label}
          label={control.label}
          added={() => props.ingredientAdd(control.type)}
          remove={()=> props.ingredientRemove(control.type)}
          disabled={props.disabled[control.type]}
        />
      ))}
      <button
        disabled={!props.purchasable}
        className={styles.OrderButton}
        onClick={props.openModal}
      >
        ORDER NOW
      </button>
    </div>
  );
};

BuildControls.propTypes = {
  ingredientAdd: PropTypes.func.isRequired,
  ingredientRemove: PropTypes.func.isRequired,
  disabled:PropTypes.object,
  price:PropTypes.number,
  purchasable: PropTypes.bool,
  openModal: PropTypes.func
};

export default BuildControls;

