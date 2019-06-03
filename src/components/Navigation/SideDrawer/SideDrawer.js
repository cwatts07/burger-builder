import React from 'react';
import PropTypes from 'prop-types';

import styles from './SideDrawer.module.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

const SideDrawer = props => {
  let classes = [styles.SideDrawer, styles.Close];
  if(props.isVisible){
    classes = [styles.SideDrawer, styles.Open];
  }
  return (
    <Aux>
      <Backdrop isVisible={props.isVisible} clicked={props.closed}/>
      <div className={classes.join(' ')}>
        <div className={styles.Logo}>
          <Logo/>
        </div>
        <nav>
          <NavigationItems/>
        </nav>
      </div>
    </Aux>
  );
};

SideDrawer.propTypes = {
  isVisible: PropTypes.bool,
  closed: PropTypes.func,
  opened: PropTypes.func
};

export default SideDrawer;
