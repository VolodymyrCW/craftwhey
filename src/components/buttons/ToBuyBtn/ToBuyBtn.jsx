"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useBasket } from "@/store";

import styles from "./ToBuyBtn.module.scss";

const ToBuyBtn = ({ item, activeBtnContainer, card }) => {
    const [cardBtn, setCardBtn] = useState(card);
    const basketGoods = useBasket((state) => state.basketGoods);
    const addBasketItem = useBasket((state) => state.addBasketItem);

    const stylesCardBtn =
        cardBtn === "card" ? styles.btnCardContainer : styles.btnContainer;

    const container = !item?.isAbsent
        ? stylesCardBtn + " " + activeBtnContainer
        : styles.btnContainer +
          " " +
          styles.btnContainerIsAbsent +
          " " +
          activeBtnContainer;

    const handleButtonClick = () => {
        const idArray = basketGoods.map((stuffId) => stuffId.id);

        if (idArray.includes(item._id)) {
            toast.info(`${item.name} уже в корзині!`);
            return;
        }

        toast.success(`Ви додали ${item.name} у корзину!`);

        addBasketItem(item._id, item.name, item.image, item.price);
    };

    return (
        <div
            className={container}
            onClick={(e) => {
                e.preventDefault();
            }}
        >
            <button
                className={
                    cardBtn === "card"
                        ? styles.btn
                        : styles.btn + " " + styles.btnUniversal
                }
                onClick={handleButtonClick}
            >
                Купити
            </button>
            <div
                className={
                    cardBtn === "card"
                        ? styles.btnBlock + " " + styles.btnBlockCard
                        : styles.btnBlock + " " + styles.btnBlockUniversal
                }
            >
                <button className={styles.btnArrow}>
                    <svg>
                        <use href='sprite.svg#icon-schevron_left' />
                    </svg>
                </button>
                <p>1</p>
                <button className={styles.btnArrow}>
                    <svg>
                        <use href='sprite.svg#icon-schevron_right' />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ToBuyBtn;
