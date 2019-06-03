import React from 'react';
import PropTypes from 'prop-types';

import styles from './SideDrawer.module.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const SideDrawer = props => {
  return (
    <div style={styles.SideDrawer}>
      <Logo/>
      <nav>
        <NavigationItems/>
      </nav>
    </div>
  );
};

SideDrawer.propTypes = {

};

export default SideDrawer;
