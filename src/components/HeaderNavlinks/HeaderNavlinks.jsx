'use client';

import { SiteContext } from '@/context/siteContext';
import { navLinks } from '@/data/navLinks';
import { GetDataForHomeByCollection } from '@/fetch/clientFetch';
import Link from 'next/link';

import { useContext, useEffect, useRef, useState } from 'react';

import styles from './HeaderNavlinks.module.scss';

const HeaderNavlinks = ({ className }) => {
  const { handleReset, setBurgermenu } = useContext(SiteContext);

  const [openSubMenu, setOpenSubMenu] = useState(null);

  const [closingSubMenu, setClosingSubMenu] = useState(null);

  const { data, isLoading } = GetDataForHomeByCollection('products');

  console.log(data);

  const menuRef = useRef(null);

  const toggleSubMenu = (title) => {
    if (openSubMenu === title) {
      setClosingSubMenu(title);
      setTimeout(() => {
        setOpenSubMenu(null);
        setClosingSubMenu(null);
      }, 300);
    } else {
      setOpenSubMenu(title);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setBurgermenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`${className} ${styles.navLinks}`} ref={menuRef}>
      <div className={styles.navList}>
        {navLinks.slice(0, 3).map((el) => (
          <div
            className={styles.linkContainer}
            key={el.title}
            onMouseEnter={() => setOpenSubMenu(el.title)}
            onMouseLeave={() => {
              setClosingSubMenu(el.title);
              setTimeout(() => {
                if (closingSubMenu === el.title) {
                  setOpenSubMenu(null);
                  setClosingSubMenu(null);
                }
              }, 300);
            }}
          >
            <Link
              href={el.href ? el.href : ''}
              onClick={() => {
                el.title === 'Продукція' && handleReset;
                setBurgermenu(false);
              }}
              className={styles.navLink}
            >
              {el.title}
            </Link>
            {el.title !== 'Головна' && (
              <button
                className={`${styles.arrowBtn} ${
                  openSubMenu === el.title ? styles.open : ''
                }`}
                onClick={() => toggleSubMenu(el.title)}
              >
                <svg>
                  <use href="sprite.svg#icon-schevron_bottom" />
                </svg>
              </button>
            )}
            {el.subMenu && openSubMenu === el.title && (
              <ul
                className={`${styles.subMenu} ${
                  openSubMenu === el.title ? styles.open : ''
                }`}
                key={el.title}
              >
                {el.subMenu.map((item) => (
                  <li>
                    <Link onClick={() => setBurgermenu(false)} href={el.href}>
                      {item.title}
                    </Link>
                  </li>
                ))}
                {el.title === 'Продукція' &&
                  [
                    ...new Set(
                      data?.map(({ category, categoryRus }) =>
                        JSON.stringify({ category, categoryRus })
                      )
                    ),
                  ].map((item, index) => {
                    const { category, categoryRus } = JSON.parse(item);
                    return (
                      <li key={index}>
                        <Link
                          onClick={() => setBurgermenu(false)}
                          href={`/products?category=${categoryRus}`}
                        >
                          {category}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
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
