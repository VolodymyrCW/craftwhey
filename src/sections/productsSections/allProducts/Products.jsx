'use client';

import { productsCategory } from '@/data/productsCategory';
import { GetDataForHomeByCollection } from '@/fetch/clientFetch';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Products.module.scss';

const Products = () => {
  const { data, isLoading } = GetDataForHomeByCollection('products');

  const arr = data?.map((item) => {
    const categoryData = productsCategory.find(
      ({ cat }) => item.categoryRus === cat
    );

    return {
      category: item.categoryRus,
      imageCat: categoryData?.img,
      titleCat: categoryData?.title,
    };
  });

  const unique = arr
    ?.map((e) => e.category)
    .filter((category, index, self) => self.indexOf(category) === index)
    .map((category) => arr.find((a) => a.category === category));

  return (
    <section className={styles.section}>
      <div className={`container ${styles.categoryList}`}>
        {unique?.map((item) => (
          <Link
            href={`/products/${item.category}`}
            key={item.category}
            className={styles.categoryCard}
          >
            <figure className={styles.imgContainer}>
              <Image
                src={item.imageCat}
                alt={item.titleCat}
                fill="true"
                sizes="100%"
              />
            </figure>
            <h2 className={styles.title}>
              {item.titleCat}
              <svg className={styles.arrowSvg}>
                <use href="sprite.svg#icon-schevron_right" />
              </svg>
            </h2>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
