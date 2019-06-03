import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.css'
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.isVisible !== this.props.isVisible
  }
  
  render() {
    const classes = this.props.isVisible ? styles.Modal + ' ' + styles.open : styles.Modal;
    return (
      <Aux>
        <Backdrop isVisible={this.props.isVisible} clicked={this.props.modalClose}/>
        <div className={classes}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

Modal.propTypes = {
  isVisible: PropTypes.bool,
  modalClose: PropTypes.func
};

export default Modal;
