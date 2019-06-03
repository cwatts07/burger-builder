import React from 'react';
import PropTypes from 'prop-types';

import logoImage from '../../assets/images/burger-logo.png';
import styles from './Logo.module.css';

const Logo = props => {
  return (
    <div className={styles.Logo}>
      <img src={logoImage} alt={"Burger Builder Logo"}/>
    </div>
  );
};

Logo.propTypes = {

};

export default Logo;
