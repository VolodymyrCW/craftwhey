"use client";

import { useBasket } from "@/store";

import styles from "./Basket.module.scss";

const CounterBasket = ({ id, quantity }) => {
    const incrementBasketItem = useBasket((state) => state.incrementBasketItem);
    const decrementBasketItem = useBasket((state) => state.decrementBasketItem);

    return (
        <div className={styles.counterBox}>
            <button
                className={styles.btnCount}
                onClick={() => incrementBasketItem(id)}
            >
                <svg className={styles.icon}>
                    <use href='sprite.svg#icon-plus' />
                </svg>
            </button>
            <p className={styles.numberCount}>{quantity}</p>
            <button
                className={styles.btnCount}
                onClick={() => decrementBasketItem(id)}
            >
                <svg className={styles.icon}>
                    <use href='sprite.svg#icon-minus' />
                </svg>
            </button>
        </div>
    );
};

export default CounterBasket;
