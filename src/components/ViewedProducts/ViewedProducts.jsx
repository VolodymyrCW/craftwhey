'use client';

import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './ViewedProducts.module.scss';

const ViewedProducts = ({ viewedProducts }) => {
  const [visibleProducts, setVisibleProducts] = useState(2);

  useEffect(() => {
    const updateVisibleProducts = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setVisibleProducts(2);
      } else if (width < 1320) {
        setVisibleProducts(3);
      } else {
        setVisibleProducts(4);
      }
    };

    window.addEventListener('resize', updateVisibleProducts);

    updateVisibleProducts();

    return () => window.removeEventListener('resize', updateVisibleProducts);
  }, []);

  return (
    viewedProducts?.length > 0 && (
      <section className={` section ${styles.viewedProductsContainer}`}>
        <div className={`container ${styles.viewedProducts}`}>
          <h2 className={styles.viewedProductsTitle}>
            Ви нещодавно переглядали цей товар:
          </h2>
          <h2 className={styles.viewedProductsTitleSmall}>
            Нещодавно переглянуті:
          </h2>
          <ul className={styles.viewedProductsList}>
            {viewedProducts.slice(0, visibleProducts)?.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`products/${item.slug}`}
                  className={styles.viewedProductsItem}
                >
                  <figure className={styles.viewedProductsImg}>
                    <CldImage src={item.image} alt={item.name} fill={true} />
                  </figure>
                  <h4>{item.name}</h4>
                  <p>{item.price} грн</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  );
};

export default ViewedProducts;
