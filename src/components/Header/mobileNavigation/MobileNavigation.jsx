"use client";

import HeaderNavlinks from "@/components/HeaderNavlinks/HeaderNavlinks";
import { SiteContext } from "@/context/siteContext";
import React, { useContext } from "react";

import styles from "./MobileNavigation.module.scss";

const MobileNavigation = () => {
  //   const qwe = (e) => {
  //     console.log(e.target);
  //   };
  const { burgerMenu, setBurgermenu } = useContext(SiteContext);

  return (
    <div
      className={
        burgerMenu
          ? `${styles.burgerMenu} ${styles.burgerMenuVisible}`
          : `${styles.burgerMenu}`
      }
    >
      <p className={styles.lang}>
        <span>УКР</span> <span>РУС</span>
      </p>
      <HeaderNavlinks className={`${styles.navlinks}`} />
    </div>
  );
};

export default MobileNavigation;
