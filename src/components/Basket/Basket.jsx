"use client";

import { useContext } from "react";
import { CldImage } from "next-cloudinary";
import { SiteContext } from "@/context/siteContext";
import CounterBasket from "./CounterBasket";
import EmptyBasket from "./EmptyBasket";

import styles from "./Basket.module.scss";

const Basket = () => {
    const { openBasket, setOpenBasket, basketGoods, setBasketGoods } =
        useContext(SiteContext);

    let totalSum = basketGoods?.reduce(
        (acc, el) => acc + el.quantity * Number(el.price),
        0
    );

    function handleBasketClose() {
        setOpenBasket(false);
    }

    function handleDeleteItem(id) {
        setBasketGoods(basketGoods.filter((item) => item.id !== id));
    }

    return (
        <div
            className={
                openBasket
                    ? `${styles.menu} ${styles.activeMenu}`
                    : `${styles.menu}`
            }
        >
            {basketGoods.length ? (
                <div>
                    {openBasket && (
                        <button
                            onClick={handleBasketClose}
                            className={styles.btnBack}
                        >
                            <svg
                                className={`${styles.icon} ${styles.iconSchevron}`}
                            >
                                <use href='sprite.svg/#icon-schevron_right' />
                            </svg>
                        </button>
                    )}
                    <div className={styles.cardHeader}>
                        <svg className={`${styles.icon} ${styles.iconCart}`}>
                            <use href='sprite.svg/#black_cart_32' />
                        </svg>
                        <h3 className={styles.cardTitle}>Ваше замовлення</h3>
                    </div>
                    <ul className={styles.listBasket}>
                        {basketGoods?.map((item) => (
                            <li key={item.id} className={styles.itemBasket}>
                                <div className={styles.innerWrap}>
                                    <div className={styles.imageBasketBox}>
                                        <CldImage
                                            src={item.image}
                                            alt={item.name}
                                            fill={true}
                                        />
                                    </div>

                                    <p className={styles.priceItem}>
                                        {item.price} грн
                                    </p>
                                </div>
                                <div className={styles.innerWrap}>
                                    <h4 className={styles.nameItem}>
                                        {item.name}
                                    </h4>
                                    <CounterBasket
                                        id={item.id}
                                        quantity={item.quantity}
                                    />
                                </div>
                                <button
                                    onClick={() => handleDeleteItem(item.id)}
                                    className={styles.btnDeleteItem}
                                >
                                    <svg className={styles.icon}>
                                        <use href='sprite.svg/#icon-close_mini' />
                                    </svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.cardFooter}>
                        <p className={styles.totalSum}>{totalSum}</p>

                        <button className={styles.orderBtn}>
                            Оформити замовлення
                        </button>
                    </div>
                </div>
            ) : (
                <EmptyBasket />
            )}
        </div>
    );
};

export default Basket;
