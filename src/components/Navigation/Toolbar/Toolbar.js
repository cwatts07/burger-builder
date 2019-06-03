import React from 'react';
import PropTypes from 'prop-types';

import styles from './Toolbar.module.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const MyComponent = props => {
  return (
    <header className={styles.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>
        <NavigationItems/>
      </nav>
    </header>
  );
};

MyComponent.propTypes = {

};

export default MyComponent;
