import React, {Component} from 'react';

import Aux from "../../hoc/Aux";
import styles from './Layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";


class Layout extends Component {
  state = {
    sideDrawerOpen: false
  };
  
  sideDrawerClosedHandler = () => {
    this.setState({sideDrawerOpen:false})
  };
  sideDrawerOpenHandler = () => {
    this.setState({sideDrawerOpen:true})
  };
  
  render() {
    return (
      <Aux>
        <Toolbar openSideDrawer={this.sideDrawerOpenHandler}/>
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          opened={this.sideDrawerOpenHandler}
          isVisible={this.state.sideDrawerOpen}
        />
        <main className={styles.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;