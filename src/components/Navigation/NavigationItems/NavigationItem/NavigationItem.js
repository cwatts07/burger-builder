import React from 'react';
import PropTypes from 'prop-types';

import styles from './NavigationItem.module.css';

const NavigationItem = props => {
  return (
    <li className={styles.NavigationItem}>
      <a
        href={props.link}
        className={props.active ? styles.active : null}
      >
        {props.children}
      </a>
    </li>
  );
};

NavigationItem.propTypes = {
  link: PropTypes.string,
  active: PropTypes.bool
};

export default NavigationItem;
