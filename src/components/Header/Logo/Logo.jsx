'use client';

import Link from 'next/link';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <Link href="/">
      <svg className={styles.logo}>
        <use href="sprite.svg/#icon-Logo" />
      </svg>
    </Link>
  );
};

export default Logo;
