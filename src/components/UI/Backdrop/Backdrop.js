import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Backdrop.module.css";

const Backdrop = props => {
  const classes = props.isVisible ? styles.Backdrop + ' ' + styles.Open : styles.Backdrop;
  return (
    <div className={classes} onClick={props.clicked}>
    
    </div>
  );
};

Backdrop.propTypes = {
  isVisible: PropTypes.bool,
  clicked: PropTypes.func
};

export default Backdrop;
