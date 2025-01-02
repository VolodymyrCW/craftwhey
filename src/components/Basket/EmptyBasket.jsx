"use client";

import { useBasket } from "@/store";

import styles from "./Basket.module.scss";

const EmptyBasket = () => {
    const openBasket = useBasket((state) => state.openBasket);
    const setOpenBasket = useBasket((state) => state.setOpenBasket);

    return (
        <div className={styles.emptyBox}>
            {openBasket && (
                <button onClick={setOpenBasket} className={styles.btnBack}>
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
