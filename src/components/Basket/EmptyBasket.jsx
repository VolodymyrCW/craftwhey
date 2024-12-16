"use client";

import { useContext } from "react";
import { SiteContext } from "@/context/siteContext";

import styles from "./Basket.module.scss";

const EmptyBasket = () => {
    const { openBasket, setOpenBasket } = useContext(SiteContext);

    function handleBacketClose() {
        setOpenBasket(false);
    }
    return (
        <div className={styles.emptyBox}>
            {openBasket && (
                <button onClick={handleBacketClose} className={styles.btnBack}>
                    <svg className={styles.icon}>
                        <use href='sprite.svg/#icon-schevron_right' />
                    </svg>
                </button>
            )}
            <svg
                className={`${styles.icon} ${styles.iconCart} ${styles.svgEmptyBasket}`}
            >
                <use href='sprite.svg/#black_cart_32' />
            </svg>
            <p className={styles.totalSum}>Ваш кошик пустий</p>
        </div>
    );
};

export default EmptyBasket;
