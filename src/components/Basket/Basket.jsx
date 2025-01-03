"use client";

import { useRouter } from "next/navigation";
import { CldImage } from "next-cloudinary";
// import shallow from "zustand/shallow";
import CounterBasket from "./CounterBasket";
import EmptyBasket from "./EmptyBasket";
import { useBasket } from "@/store";

import styles from "./Basket.module.scss";

const Basket = () => {
    const router = useRouter();
    // const { basketGoods, setBasketGoods } = useContext(SiteContext);

    const openBasket = useBasket((state) => state.openBasket);
    const setOpenBasket = useBasket((state) => state.setOpenBasket);
    const basketGoods = useBasket((state) => state.basketGoods);
    const deleteBasketItem = useBasket((state) => state.deleteBasketItem);
    // const totalSumBasketGoods = useBasket((state) => state.totalSumBasketGoods);

    // console.log("basketGoodsBasket:", basketGoods);

    let totalSum = basketGoods?.reduce(
        (acc, el) => acc + el.quantity * Number(el.price),
        0
    );

    // console.log("render basket");

    // useEffect(() => {
    //     const localStorageBasket =
    //         JSON.parse(localStorage.getItem("basketProducts")) || [];
    //     addGoods(localStorageBasket);
    // }, [addGoods]);

    // function deleteBasketItem(id) {
    //     const filteredGoods = basketGoods.filter((item) => item.id !== id);
    //     addGoods(filteredGoods);
    //     localStorage.setItem("basketProducts", JSON.stringify(filteredGoods));
    // }

    function handlePlaceAnOrder() {
        setOpenBasket();
        router.push("/order");
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
                <div className={styles.basketWrap}>
                    {openBasket && (
                        <button
                            onClick={setOpenBasket}
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
                                    onClick={() => deleteBasketItem(item.id)}
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
                        <p className={styles.totalSum}>{totalSum} грн</p>

                        <button
                            className={styles.orderBtn}
                            onClick={handlePlaceAnOrder}
                        >
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
