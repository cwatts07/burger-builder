import React from 'react';
import PropTypes from 'prop-types';
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

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
      <p><strong>Total Price:</strong>{props.total.toFixed(2)}</p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.cancelOrder} type={'Danger'}>CANCEL</Button>
      <Button clicked={props.continueOrder} type={'Success'}>CONTINUE</Button>
    </Aux>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.object,
  total: PropTypes.number,
  cancelOrder: PropTypes.func,
  continueOrder: PropTypes.func
};

export default OrderSummary;
