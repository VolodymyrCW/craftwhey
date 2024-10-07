'use client';

import { SiteContext } from '@/context/siteContext';
import { navLinks } from '@/data/navLinks';
import Link from 'next/link';
import { useContext } from 'react';

const HeaderNavlinks = ({ className }) => {
  const { handleReset } = useContext(SiteContext);
  return (
    <nav className={className}>
      {navLinks.map((el) => {
        return (
          <Link
            key={el.title}
            href={el.href ? el.href : ''}
            onClick={el.title === 'Продукція' && handleReset}
          >
            {el.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default HeaderNavlinks;
