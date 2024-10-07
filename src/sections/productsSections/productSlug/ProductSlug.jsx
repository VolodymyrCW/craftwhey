'use client';

import { GetDataWithPathname } from '@/fetch/clientFetch';
import { CldImage } from 'next-cloudinary';
import { useEffect } from 'react';
import ToBuyBtn from '@/components/buttons/ToBuyBtn/ToBuyBtn';
import styles from './ProductSlug.module.scss';

const ProductSlug = () => {
  const { data, isLoading } = GetDataWithPathname();

  console.log(data);

  useEffect(() => {
    if (!data) return;

    let viewedProducts =
      JSON.parse(localStorage.getItem('viewedProducts')) || [];
    const isProductViewed = viewedProducts.find((p) => p?.slug === data?.slug);

    if (!isProductViewed) {
      viewedProducts = [data, ...viewedProducts];

      viewedProducts = viewedProducts.slice(0, 4);

      localStorage.setItem('viewedProducts', JSON.stringify(viewedProducts));
    }
  }, [data]);

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container`}>
        {!isLoading && (
          <div className={styles.container}>
            <figure className={styles.imgContainer}>
              <CldImage src={data.image} alt={data.name} fill={true} />
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
                  <ToBuyBtn item={data} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSlug;
