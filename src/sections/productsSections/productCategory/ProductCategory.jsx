'use client';

import ProductCard from '@/components/ProductCard/ProductCard';
import { GetDataForHomeByCollection } from '@/fetch/clientFetch';
import { usePathname } from 'next/navigation';
import styles from './ProductCategory.module.scss';

const ProductCategory = () => {
  const pathname = usePathname();
  const result = pathname.replace('/products/', '');

  const { data, isLoading } = GetDataForHomeByCollection('products');

  // console.log(data);

  const filteredData = data?.filter((item) => item.categoryRus === result);

  return (
    <section className={styles.section}>
      <ul className={`container ${styles.productsList}`}>
        {filteredData?.map((item) => (
          <ProductCard item={item} result={result} key={item.slug} />
        ))}
      </ul>
    </section>
  );
};

export default ProductCategory;
