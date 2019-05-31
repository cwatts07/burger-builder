import React from 'react';
import PropTypes from 'prop-types'

import styles from './BuildControl.module.css'

const BuildControl = (props) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.label}</div>
      <button
        disabled={props.disabled}
        onClick={props.remove}
        className={styles.Less}>
        Less -
      </button>
      <button
        onClick={props.added}
        className={styles.More}>
        More +
      </button>
    </div>
  );
};

BuildControl.propTypes ={
  added:PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

export default BuildControl;
