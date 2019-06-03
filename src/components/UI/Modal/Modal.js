import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.css'
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
  const classes = props.isVisible ? styles.Modal + ' ' + styles.open : styles.Modal;
  return (
    <Aux>
      <Backdrop isVisible={props.isVisible} clicked={props.modalClose}/>
      <div className={classes}>
        {props.children}
      </div>
    </Aux>
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool,
  modalClose: PropTypes.func
};

export default Modal;
