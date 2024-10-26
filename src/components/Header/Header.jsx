import BurgerBtn from '../buttons/BurgerBtn/BurgerBtn';
import HeaderNavlinks from '../HeaderNavlinks/HeaderNavlinks';

import styles from './Header.module.scss';
import Logo from './Logo/Logo';
import MobileNavigation from './mobileNavigation/MobileNavigation';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <BurgerBtn />
        <Logo />
        <MobileNavigation />
        <HeaderNavlinks className={styles.navLinks} />
      </div>
    </header>
  );
};

export default Header;
