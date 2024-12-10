import Logo from "./Logo/Logo";
import MobileNavigation from "./mobileNavigation/MobileNavigation";
import BurgerBtn from "../buttons/BurgerBtn/BurgerBtn";
import BasketBtn from "../buttons/BasketBtn/BasketBtn";
import Basket from "../Basket/Basket";

import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <BurgerBtn />
                <Logo />
                <MobileNavigation />
                <div className={styles.iconContainer}>
                    <svg className={styles.svg}>
                        <use href='sprite.svg/#icon-search_24' />
                    </svg>
                    <BasketBtn />
                    <p className={styles.lang}>
                        <span>Укр</span> <span>Eng</span>
                    </p>
                </div>
            </div>
            <Basket />
        </header>
    );
};

export default Header;
