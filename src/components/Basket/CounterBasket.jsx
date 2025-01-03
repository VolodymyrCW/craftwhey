"use client";

import { useBasket } from "@/store";
// import { useContext } from "react";
// import { SiteContext } from "@/context/siteContext";

import styles from "./Basket.module.scss";

const CounterBasket = ({ id, quantity }) => {
    // const { basketGoods, setBasketGoods } = useContext(SiteContext);
    const incrementBasketItem = useBasket((state) => state.incrementBasketItem);
    const decrementBasketItem = useBasket((state) => state.decrementBasketItem);

    // const handleIncrement = (id) => {
    //     setBasketGoods(
    //         basketGoods.map((el) => {
    //             if (el.id === id) {
    //                 return { ...el, quantity: el.quantity + 1 };
    //             } else {
    //                 return el;
    //             }
    //         })
    //     );
    // };

    // const handleDecrement = (id) => {
    //     setBasketGoods(
    //         basketGoods.map((el) => {
    //             if (el.id === id) {
    //                 if (el.quantity <= 1) return el;
    //                 return { ...el, quantity: el.quantity - 1 };
    //             } else {
    //                 return el;
    //             }
    //         })
    //     );
    // };

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
