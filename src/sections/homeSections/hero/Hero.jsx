'use client';

import { useState, useEffect } from 'react';
import { productsCategory } from '@/data/productsCategory';
import { GetDataForHomeByCollection } from '@/fetch/clientFetch';
import Link from 'next/link';
import styles from './Hero.module.scss';

const Hero = () => {
  const { data, isLoading } = GetDataForHomeByCollection('products');

  const [currentIndex, setCurrentIndex] = useState(0);

  const arr = data?.map((item) => {
    const categoryTitle = productsCategory.map(
      ({ title, cat }) => item.category === cat && title
    );
    return {
      category: item.category,
      image: item.image,
      titleCat: categoryTitle,
    };
  });

  const unique = arr
    ?.map((e) => e.category)
    .filter((category, index, self) => self.indexOf(category) === index)
    .map((category) => arr.find((a) => a.category === category));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % unique.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [unique]);

  if (isLoading || !unique) return <div>Завантаження...</div>;

  const currentItem = unique[currentIndex];

  return (
    <section className={styles.section} id="home">
      <div className={`container ${styles.heroContainer}`}>
        <Link
          href={`/products/${currentItem.category}`}
          key={currentItem.category}
          className={styles.heroLink}
        >
          <div className={styles.heroContent}>
            <h1>{currentItem.titleCat}</h1>
          </div>
        </Link>
      </div>
    </section>
    // <section className={styles.section} id="home">
    //   <div className={`container ${styles.heroContainer}`}>
    //     {unique?.map((item) => (
    //       <Link
    //         href={`/products/${item.category}`}
    //         key={item.category}
    //         className={styles.heroLink}
    //         style={{ width: '100vw', height: '100vh' }}
    //       >
    //         {item.titleCat}
    //       </Link>
    //     ))}
    //   </div>
    // </section>
  );
};

export default Hero;
