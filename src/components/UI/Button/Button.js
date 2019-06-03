import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css'

const MyComponent = props => {
  return (
    <button
      className={[styles.Button, styles[props.type]].join(' ')}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

MyComponent.propTypes = {
  clicked: PropTypes.func,
  type: PropTypes.string
};

export default MyComponent;
