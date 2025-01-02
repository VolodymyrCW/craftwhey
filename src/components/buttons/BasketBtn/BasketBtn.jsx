"use client";

import { useContext } from "react";
import { SiteContext } from "@/context/siteContext";
import { useBasket } from "@/store";

import styles from "./BasketBtn.module.scss";

const BasketBtn = () => {
    const { basketGoods } = useContext(SiteContext);
    const setOpenBasket = useBasket((state) => state.setOpenBasket);

    return (
        <button onClick={setOpenBasket} className={styles.btn}>
            {basketGoods.length ? (
                <svg className={styles.svg}>
                    <use href='sprite.svg/#cart_white_full' />
                </svg>
            ) : (
                <svg className={styles.svg}>
                    <use href='sprite.svg/#icon-cart_24' />
                </svg>
            )}
        </button>
    );
};

export default BasketBtn;
