'use client';

import { GetDataForHomeByCollection } from '@/fetch/clientFetch';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
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
      <div className={`container ${styles.productsList}`}>
        {filteredData?.map((item) => (
          <Link
            key={item.slug}
            className={styles.productsItem}
            href={`/products/${result}/${item.slug}`}
          >
            <figure
              className={
                !item.isAbsent
                  ? styles.imgContainer
                  : styles.imgContainer + ' ' + styles.imgContainerIsAbsent
              }
            >
              <CldImage src={item.image} alt={item.name} fill="true" />
            </figure>
            <div
              className={
                !item.isAbsent
                  ? styles.productsContent
                  : styles.productsContent +
                    ' ' +
                    styles.productsContentIsAbsent
              }
            >
              {item.isAbsent && (
                <p className={styles.notAvailable}>Немає в наявності</p>
              )}
              <h2 className={styles.title}>{item.name}</h2>
              <p className={styles.price}>{item.price} грн</p>
              <div
                className={
                  !item.isAbsent
                    ? styles.btnContainer
                    : styles.btnContainer + ' ' + styles.btnContainerIsAbsent
                }
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <button className={styles.btn}>Купити</button>
                <div className={styles.btnBlock}>
                  <svg>
                    <use href="sprite.svg#icon-schevron_left" />
                  </svg>
                  <p>1</p>
                  <svg>
                    <use href="sprite.svg#icon-schevron_right" />
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.svgContainer}>
              <svg>
                <use href="sprite.svg#icon-gluten-free" />
              </svg>
              <svg>
                <use href="sprite.svg#icon-vegan" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;
