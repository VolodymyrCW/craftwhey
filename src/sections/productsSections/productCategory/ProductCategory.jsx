'use client';

import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './ProductCategory.module.scss';

const ProductCategory = ({ filteredData }) => {
  return (
    <div className={styles.section}>
      <ul className={`container ${styles.productsList}`}>
        {filteredData?.map((item) => (
          <ProductCard item={item} key={item.slug} />
        ))}
      </ul>
    </div>
  );
};

export default ProductCategory;
