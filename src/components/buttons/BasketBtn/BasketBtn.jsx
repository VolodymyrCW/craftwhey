"use client";

import { useContext, useState, useEffect } from "react";
import { SiteContext } from "@/context/siteContext";

import styles from "./BasketBtn.module.scss";

const BasketBtn = () => {
    const { basketGoods, setOpenBasket } = useContext(SiteContext);

    return (
        <button
            onClick={() => {
                setOpenBasket(true);
            }}
            className={styles.btn}
        >
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
