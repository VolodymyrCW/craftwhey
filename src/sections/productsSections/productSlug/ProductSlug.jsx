'use client';

import { GetDataWithPathname } from '@/fetch/clientFetch';
import styles from './ProductSlug.module.scss';

const ProductSlug = () => {
  // const { data, isLoading } = GetDataWithPathname();

  // console.log(data);

  return (
    <section className={styles.section}>
      <div className={`container`}>
        <h2 className={styles.title}>ProductSlug</h2>
      </div>
    </section>
  );
};

export default ProductSlug;
