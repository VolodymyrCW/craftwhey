"use client";

import { useContext, useState, useEffect } from "react";
import { SiteContext } from "@/context/siteContext";

import styles from "./BasketBtn.module.scss";

const BasketBtn = () => {
    const { basketGoods, setOpenBasket } = useContext(SiteContext);
    const [emptyBasket, setEmptyBasket] = useState(true);
    // console.log("basketGoodsBasketBtn: ", basketGoods);
    useEffect(() => {
        if (basketGoods.length > 0) {
            setEmptyBasket(false);
        }
    }, [emptyBasket, basketGoods.length]);

    return (
        <button
            onClick={() => {
                setOpenBasket(true);
            }}
            className={styles.btn}
        >
            {emptyBasket ? (
                <svg className={styles.svg}>
                    <use href='sprite.svg/#icon-cart_24' />
                </svg>
            ) : (
                <svg className={styles.svg}>
                    <use href='sprite.svg/#cart_white_full' />
                </svg>
            )}
        </button>
    );
};

export default BasketBtn;
