"use client";

import { SiteContext } from "@/context/siteContext";
import React, { useContext } from "react";

const BurgerBtn = () => {
  const { burgerMenu, setBurgermenu } = useContext(SiteContext);
  // console.log("burgerMenu", burgerMenu);

  return (
    <button
      onClick={() => {
        setBurgermenu(!burgerMenu);
      }}
    >
      menu
    </button>
  );
};

export default BurgerBtn;
