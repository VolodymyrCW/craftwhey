"use client";

import { useContext } from "react";
import { SiteContext } from "@/context/siteContext";
import OrderForm from "@/components/Forms/OrderForm";
import { useWindowResize } from "@/hooks/useWindowResize";
import BasketSlider from "@/components/Basket/BasketSlider";

import styles from "./Order.module.scss";

const Order = () => {
    const { isMobile } = useWindowResize();
    const { basketGoods } = useContext(SiteContext);
    return (
        <section className={styles.section}>
            <div className={`container`}>
                <h2 className={styles.title}>
                    {basketGoods.length > 0
                        ? "Ваше замовлення"
                        : "Ваш кошик пустий"}
                </h2>
                {isMobile && basketGoods.length > 0 && <BasketSlider />}
                <OrderForm />
            </div>
        </section>
    );
};

export default Order;
