'use client';

import { GetDataWithPathname } from '@/fetch/clientFetch';
import { useEffect } from 'react';
import styles from './ProductSlug.module.scss';

const ProductSlug = () => {
  const { data, isLoading } = GetDataWithPathname();

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
        <h2 className={styles.title}>ProductSlug</h2>
      </div>
    </section>
  );
};

export default ProductSlug;
