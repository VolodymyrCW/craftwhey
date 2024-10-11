import OrderForm from "@/components/Forms/OrderForm";

import styles from "./Order.module.scss";

const Order = () => {
    return (
        <section className={styles.section}>
            <div className={`container`}>
                <h2 className={styles.title}>Ваше замовлення</h2>
                <OrderForm />
            </div>
        </section>
    );
};

export default Order;
