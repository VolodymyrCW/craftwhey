'use client';

import HeaderNavlinks from '@/components/HeaderNavlinks/HeaderNavlinks';
import { SiteContext } from '@/context/siteContext';
import { useContext } from 'react';

import styles from './MobileNavigation.module.scss';

const MobileNavigation = () => {
  const { burgerMenu, setBurgermenu } = useContext(SiteContext);

  return (
    <div
      className={
        burgerMenu
          ? `${styles.burgerMenu} ${styles.burgerMenuVisible}`
          : `${styles.burgerMenu}`
      }
    >
      <HeaderNavlinks className={`${styles.navlinks}`} />
    </div>
  );
};

export default MobileNavigation;
