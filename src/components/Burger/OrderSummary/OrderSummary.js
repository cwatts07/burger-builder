import React from 'react';
import PropTypes from 'prop-types';
import Aux from "../../../hoc/Aux";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
  .map(key => {
    return (
      <li key={key}>
        <span style={{textTransform: 'capitalize'}}>{key}</span>
        : {props.ingredients[key]}
      </li>
    )
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicous burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.object
};

export default OrderSummary;
