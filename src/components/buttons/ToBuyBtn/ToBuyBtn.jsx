import { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
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

    useEffect(() => {
        localStorage.setItem("basketProducts", JSON.stringify(basketGoods));
    }, [basketGoods]);

    const handleButtonClick = () => {
        const idArray = basketGoods.map((stuffId) => stuffId.id);

        if (idArray.includes(item._id)) {
            toast.info("Цей товар уже в корзині!");
            return;
        }

        toast.success("Ви додали товар у корзину!");

        setBasketGoods((prev) => [
            ...prev,
            {
                id: item._id,
                name: item.name,
                image: item.image,
                price: item.price,
                quantity: 1,
            },
        ]);
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
