'use client';

import { CldImage } from 'next-cloudinary';
import ToBuyBtn from '../buttons/ToBuyBtn/ToBuyBtn';
import styles from './ProductDetail.module.scss';

const ProductDetail = ({ data, isLoading }) => {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container`}>
        {!isLoading && (
          <div className={styles.container}>
            <figure className={styles.imgContainer}>
              <CldImage src={data.image} alt={data.name} fill={true} />
              <div className={styles.svgContainer}>
                <svg>
                  <use href="sprite.svg#icon-gluten-free" />
                </svg>
                <svg>
                  <use href="sprite.svg#icon-vegan" />
                </svg>
              </div>
            </figure>

            <div className={styles.characteristicsList}>
              <div className={styles.characteristicsItem}>
                <h2 className={styles.title}>{data.name}</h2>
                <h4 className={styles.subtitle}>На 100г продукту:</h4>
                <ul className={styles.nutritionalValueList}>
                  <li>Білки - {data.protein}г</li>
                  <li>Жири - {data.fats}г</li>
                  <li>Вуглеводи - {data.carbohydrates}г</li>
                  <li>Ккал - {data.kcal}</li>
                </ul>
              </div>
              <div>
                <h4 className={styles.subtitle}>Склад:</h4>
                <p className={styles.composition}>{data.composition}</p>
                <div className={styles.byContainer}>
                  <p className={styles.price}>{data.price}грн</p>
                  <ToBuyBtn item={data} card="universal" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
