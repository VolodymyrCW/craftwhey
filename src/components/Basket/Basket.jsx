"use client";

import { useContext, useState } from "react";
import { SiteContext } from "@/context/siteContext";

import styles from "./Basket.module.scss";

const Basket = () => {
    const { openBasket, setOpenBasket } = useContext(SiteContext);
    const [totalSum, setTotalSum] = useState(0);
    // console.log("openBasket: ", openBasket);

    function handleBacketClose() {
        setOpenBasket(false);
    }

    return (
        <div
            className={
                openBasket
                    ? `${styles.menu} ${styles.activeMenu}`
                    : `${styles.menu}`
            }
        >
            {openBasket && (
                <button onClick={handleBacketClose} className={styles.btnBack}>
                    <svg className={styles.icon}>
                        <use href='sprite.svg/#icon-schevron_right' />
                    </svg>
                </button>
            )}
            <div className={styles.cardHeader}>
                <svg className={styles.svg}>
                    <use href='sprite.svg/#black_cart_32' />
                </svg>
                <h3 className={styles.cardTitle}>Ваше замовлення</h3>
            </div>
            <div className={styles.cardFooter}>
                {totalSum ? (
                    <p className={styles.totalSum}>{totalSum}</p>
                ) : (
                    <p className={styles.totalSum}>Ваш кошик пустий</p>
                )}
                <button className={styles.orderBtn}>Оформити замовлення</button>
            </div>
        </div>
    );
};

export default Basket;
