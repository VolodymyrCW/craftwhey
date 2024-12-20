"use client";

import { useContext } from "react";
import { CldImage } from "next-cloudinary";
import { SiteContext } from "@/context/siteContext";
import CounterBasket from "@/components/Basket/CounterBasket";

import styles from "./OrderList.module.scss";

const OrderList = () => {
    const { basketGoods, setBasketGoods } = useContext(SiteContext);

    let totalSum = basketGoods?.reduce(
        (acc, el) => acc + el.quantity * Number(el.price),
        0
    );

    function handleDeleteItem(id) {
        const filteredGoods = basketGoods.filter((item) => item.id !== id);
        setBasketGoods(filteredGoods);
        localStorage.setItem("basketProducts", JSON.stringify(filteredGoods));
    }
    return (
        <div>
            <h3 className={styles.cardTitle}>Ваше замовлення</h3>
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

                            <p className={styles.priceItem}>{item.price} грн</p>
                        </div>
                        <div className={styles.innerWrap}>
                            <h4 className={styles.nameItem}>{item.name}</h4>
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
            <p className={styles.totalSum}>Сума замовлення: {totalSum} грн.</p>
        </div>
    );
};

export default OrderList;
