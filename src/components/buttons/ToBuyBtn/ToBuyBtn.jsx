import { useState, useContext } from "react";
import { SiteContext } from "@/context/siteContext";

import styles from "./ToBuyBtn.module.scss";

const ToBuyBtn = ({ item, activeBtnContainer, card }) => {
    const [cardBtn, setCardBtn] = useState(card);
    const { basketGoods, setBasketGoods } = useContext(SiteContext);

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
        const idArray = basketGoods.map((stuffId) => stuffId._id);

        if (idArray.includes(item._id)) {
            return;
        }
        setBasketGoods((prev) => [...prev, item]);
    };
    // console.log("basketGoods:", basketGoods);

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
