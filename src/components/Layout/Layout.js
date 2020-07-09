import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Auxiliary>
      <div>
        {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
        <main className={styles.container}>{props.children}</main>
      </div>
    </Auxiliary>
  );
};

export default Layout;
