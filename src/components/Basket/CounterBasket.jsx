"use client";

import { useContext, useState } from "react";
import { SiteContext } from "@/context/siteContext";

import styles from "./Basket.module.scss";

const CounterBasket = ({ id, quantity }) => {
    const { basketGoods, setBasketGoods } = useContext(SiteContext);

    const handleIncrement = (id) => {
        setBasketGoods(
            basketGoods.map((el) => {
                if (el.id === id) {
                    return { ...el, quantity: el.quantity + 1 };
                } else {
                    return el;
                }
            })
        );
    };

    const handleDecrement = (id) => {
        setBasketGoods(
            basketGoods.map((el) => {
                if (el.id === id) {
                    if (el.quantity <= 1) return el;
                    return { ...el, quantity: el.quantity - 1 };
                } else {
                    return el;
                }
            })
        );
    };

    return (
        <div className={styles.counterBox}>
            <button
                className={styles.btnCount}
                onClick={() => handleIncrement(id)}
            >
                <svg className={`${styles.icon} ${styles.iconSchevron}`}>
                    <use href='sprite.svg#icon-plus' />
                </svg>
            </button>
            <p className={styles.numberCount}>{quantity}</p>
            <button
                className={styles.btnCount}
                onClick={() => handleDecrement(id)}
            >
                <svg className={`${styles.icon} ${styles.iconSchevron}`}>
                    <use href='sprite.svg#icon-minus' />
                </svg>
            </button>
        </div>
    );
};

export default CounterBasket;
