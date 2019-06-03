import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(key => {
      return (
        <li key={key}>
          <span style={{textTransform: 'capitalize'}}>{key}</span>
          : {this.props.ingredients[key]}
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
        <p><strong>Total Price:</strong>{this.props.total.toFixed(2)}</p>
        <p>Continue to Checkout?</p>
        <Button clicked={this.props.cancelOrder} type={'Danger'}>CANCEL</Button>
        <Button clicked={this.props.continueOrder} type={'Success'}>CONTINUE</Button>
      </Aux>
    );
  }
}

OrderSummary.propTypes = {
  ingredients: PropTypes.object,
  total: PropTypes.number,
  cancelOrder: PropTypes.func,
  continueOrder: PropTypes.func
};

export default OrderSummary;
