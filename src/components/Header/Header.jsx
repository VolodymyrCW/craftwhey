import React from "react";
import BurgerBtn from "../buttons/BurgerBtn/BurgerBtn";

import styles from "./Header.module.scss";
import MobileNavigation from "./mobileNavigation/MobileNavigation";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <BurgerBtn />
        <MobileNavigation />
      </div>
    </header>
  );
};

export default Header;
