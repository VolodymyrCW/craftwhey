import BurgerBtn from '../buttons/BurgerBtn/BurgerBtn';
import Logo from './Logo/Logo';
import MobileNavigation from './mobileNavigation/MobileNavigation';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <BurgerBtn />
        <Logo />
        <MobileNavigation />
        <div className={styles.iconContainer}>
          <svg className={styles.svg}>
            <use href="sprite.svg/#icon-search_24" />
          </svg>
          <svg className={styles.svg}>
            <use href="sprite.svg/#icon-cart_24" />
          </svg>
          <p className={styles.lang}>
            <span>Укр</span> <span>Eng</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
