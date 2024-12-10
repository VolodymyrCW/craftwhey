"use client";

import { useContext } from "react";
import { SiteContext } from "@/context/siteContext";

import styles from "./BasketBtn.module.scss";

const BasketBtn = () => {
    const { openBasket, setOpenBasket } = useContext(SiteContext);
    // console.log("openBasket: ", openBasket);
    return (
        <button
            onClick={() => {
                setOpenBasket(!openBasket);
            }}
            className={styles.btn}
        >
            <svg className={styles.svg}>
                <use href='sprite.svg/#icon-cart_24' />
            </svg>
        </button>
    );
};

export default BasketBtn;
