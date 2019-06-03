import React from 'react';
import PropTypes from 'prop-types';

import styles from './Toolbar.module.css';
import Logo from "../../Logo/Logo";

const MyComponent = props => {
  return (
    <header className={styles.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>
        ...
      </nav>
    </header>
  );
};

MyComponent.propTypes = {

};

export default MyComponent;
