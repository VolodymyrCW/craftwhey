"use client";

import { useContext, useState } from "react";
import { SiteContext } from "@/context/siteContext";
import EmptyBasket from "./EmptyBasket";

import styles from "./Basket.module.scss";

const Basket = () => {
    const { openBasket, setOpenBasket, basketGoods } = useContext(SiteContext);
    const [totalSum, setTotalSum] = useState(0);
    // const [currentBasket, setCurrentBasket] = useState(true);
    // // console.log("openBasket: ", openBasket);
    // useEffect(() => {
    //     if (basketGoods.length > 0) {
    //         setEmptyBasket(false);
    //     }
    // }, [emptyBasket, basketGoods.length]);

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
            {totalSum ? (
                <div>
                    {openBasket && (
                        <button
                            onClick={handleBacketClose}
                            className={styles.btnBack}
                        >
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
                        <p className={styles.totalSum}>{totalSum}</p>

                        <button className={styles.orderBtn}>
                            Оформити замовлення
                        </button>
                    </div>
                </div>
            ) : (
                <EmptyBasket />
            )}
        </div>
    );
};

export default Basket;
