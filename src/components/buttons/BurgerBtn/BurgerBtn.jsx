'use client';

import { SiteContext } from '@/context/siteContext';
import { useContext } from 'react';
import styles from './BurgerBtn.module.scss';

const BurgerBtn = () => {
  const { burgerMenu, setBurgermenu } = useContext(SiteContext);
  // console.log("burgerMenu", burgerMenu);

  return (
    <button
      onClick={() => {
        setBurgermenu(!burgerMenu);
      }}
      className={styles.btn}
    >
      <svg>
        <use href="sprite.svg#icon-menu32" />
      </svg>
    </button>
  );
};

export default BurgerBtn;
