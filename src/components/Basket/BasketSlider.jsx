"use client";

import { useContext, useEffect } from "react";
import { CldImage } from "next-cloudinary";
import { Swiper, SwiperSlide } from "swiper/react";
import { SiteContext } from "@/context/siteContext";
import CounterBasket from "./CounterBasket";

// import required modules
import { Pagination } from "swiper/modules";

// Import  styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./BasketSlider.css";
import styles from "./Basket.module.scss";

const BasketSlider = () => {
    const { basketGoods, setBasketGoods } = useContext(SiteContext);

    useEffect(() => {
        const localStorageBasket =
            JSON.parse(localStorage.getItem("basketProducts")) || [];
        setBasketGoods(localStorageBasket);
    }, [setBasketGoods]);

    function handleDeleteItem(id) {
        const filteredGoods = basketGoods.filter((item) => item.id !== id);
        setBasketGoods(filteredGoods);
        localStorage.setItem("basketProducts", JSON.stringify(filteredGoods));
    }

    return (
        <Swiper
            slidesPerView={1}
            // spaceBetween={24}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className='basketCards'
        >
            {basketGoods?.map((item) => (
                <SwiperSlide className='cartItem' key={item.id}>
                    <div className='slideContentWrapper'>
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
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default BasketSlider;
