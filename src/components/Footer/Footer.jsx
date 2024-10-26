import { contacts } from '@/data/contacts';
import { navLinks } from '@/data/navLinks';
import Link from 'next/link';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <ul className={styles.navList}>
          <li className={styles.logo}>
            <svg>
              <use href="sprite.svg/#icon-Logo" />
            </svg>
          </li>
          <li className={styles.navItem}>
            {navLinks.slice(0, 2).map(({ title, href, subMenu }) => (
              <div className={styles.firstList} key={title}>
                <Link href={href}>{title}</Link>
                <ul className={styles.navItemList}>
                  {subMenu &&
                    subMenu.map((item) => (
                      <li>
                        <Link href={item.href}>{item.title}</Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </li>
          <li className={styles.navItem}>
            {navLinks.slice(2, 4).map(({ title, href, subMenu }) => (
              <div className={styles.firstList} key={title}>
                {title !== 'Інформація' && <Link href={href}>{title}</Link>}
                <ul className={styles.navItemList}>
                  {subMenu &&
                    subMenu.map((item) => (
                      <li>
                        <Link href={item.href}>{item.title}</Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </li>
          <li className={styles.navItem}>
            {navLinks.slice(4, 5).map(({ subMenu }, index) => (
              <ul className={styles.navItemList} key={index}>
                {subMenu &&
                  subMenu.map((item) => (
                    <li key={item.title}>
                      <Link href={item.href}>{item.title}</Link>
                    </li>
                  ))}
              </ul>
            ))}
          </li>
          <li>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                {contacts.map(({ title, id, href }) => (
                  <a key={id} href={href}>
                    {title}
                  </a>
                ))}
              </div>

              <SocialLinks className={styles.socialLinks} />
            </div>
          </li>
        </ul>
        <div className={styles.copyrightContainer}>
          <p className={styles.copyright}>
            2024 by Webevery.dev all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
