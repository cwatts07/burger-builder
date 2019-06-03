import React, {Component} from 'react';
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: .10,
  bacon: .75,
  cheese: .50,
  meat: 1.3
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    modalOpen: false
  };
  
  openModalHandler = () => {
    this.setState({modalOpen:true})
  };
  
  closeModalHandler = () => {
    this.setState({modalOpen: false})
  };
  
  getNewPurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
    .map(key => ingredients[key])
    .reduce((cur, el) => cur + el, 0);
    return sum > 0;
  };
  
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updateCount;
    const newPrice = INGREDIENT_PRICES[type] + this.state.totalPrice;
    const purchasable = this.getNewPurchaseState(updatedIngredients);
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
      purchasable
    })
  };
  
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return;
    const updateCount = oldCount - 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updateCount;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    const purchasable= this.getNewPurchaseState(updatedIngredients);
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
      purchasable
    })
  };
  
  purchaseCancelHandler = () => {
    this.setState({modalOpen: false})
  };
  
  purchaseContinueHandler = () => {
    alert('You Continued!');
    this.setState({modalOpen: false})
  };
  
  render() {
    const disabledInfo = {...this.state.ingredients};
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal isVisible={this.state.modalOpen} modalClose={this.closeModalHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            total={this.state.totalPrice}
            cancelOrder={this.purchaseCancelHandler}
            continueOrder={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdd={this.addIngredientHandler}
          ingredientRemove={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          openModal={this.openModalHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;