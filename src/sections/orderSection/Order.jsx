"use client";

import { useBasket } from "@/store";
import OrderForm from "@/components/Forms/OrderForm";
import { useWindowResize } from "@/hooks/useWindowResize";
import BasketSlider from "@/components/Basket/BasketSlider";
import OrderList from "@/components/OrderList/OrderList";

import styles from "./Order.module.scss";

const Order = () => {
    const { isMobile } = useWindowResize();
    const basketGoods = useBasket((state) => state.basketGoods);

    return (
        <section className={styles.section}>
            <div className={`container ${styles.orderContainer}`}>
                {isMobile && (
                    <h2 className={styles.title}>
                        {basketGoods.length > 0
                            ? "Ваше замовлення"
                            : "Ваш кошик пустий"}
                    </h2>
                )}
                {isMobile && basketGoods.length > 0 && <BasketSlider />}

                <OrderForm />
                {!isMobile && <OrderList />}
            </div>
        </section>
    );
};

export default Order;
