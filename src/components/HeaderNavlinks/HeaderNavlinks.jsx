'use client';

import { SiteContext } from '@/context/siteContext';
import { navLinks } from '@/data/navLinks';
import Link from 'next/link';
import { useContext } from 'react';
import styles from './HeaderNavlinks.module.scss';

const HeaderNavlinks = ({ className }) => {
  const { handleReset } = useContext(SiteContext);
  return (
    <nav className={`${className} ${styles.navLinks}`}>
      <div className={styles.navList}>
        {navLinks.slice(0, 3).map((el) => (
          <div className={styles.linkContainer} key={el.title}>
            <Link
              href={el.href ? el.href : ''}
              onClick={el.title === 'Продукція' && handleReset}
              className={styles.navLink}
            >
              {el.title}
            </Link>
            {el.title !== 'Головна' && (
              <button className={styles.arrowBtn}>
                <svg>
                  <use href="sprite.svg#icon-schevron_bottom" />
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>
      {navLinks.map(
        (el) =>
          el.title === 'Співпраця' && (
            <Link
              key={el.title}
              href={el.href ? el.href : ''}
              className={styles.cooperation}
            >
              {el.title}
            </Link>
          )
      )}
    </nav>
  );
};

export default HeaderNavlinks;
