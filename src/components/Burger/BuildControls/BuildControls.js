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
      {controls.map(control => (
        <BuildControl
          key={control.label}
          label={control.label}
          added={() => props.ingredientAdd(control.type)}
          remove={()=> props.ingredientRemove(control.type)}
          disabled={props.disabled[control.type]}
        />
      ))}
    </div>
  );
};

BuildControls.propTypes = {
  ingredientAdd: PropTypes.func.isRequired,
  ingredientRemove: PropTypes.func.isRequired,
  disabled:PropTypes.object
};

export default BuildControls;

