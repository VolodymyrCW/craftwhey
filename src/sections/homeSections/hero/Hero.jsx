'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import { productsCategory } from '@/data/productsCategory';
import { GetDataForHomeByCollection } from '@/fetch/clientFetch';

import styles from './Hero.module.scss';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const { data, isLoading } = GetDataForHomeByCollection('products');

  const [currentIndex, setCurrentIndex] = useState(0);

  const router = useRouter();

  const handleCategoryClick = (category) => {
    router.push(`/products?category=${category}`);
  };

  const arr = data?.map((item) => {
    const categoryData = productsCategory.find(
      ({ cat }) => item.categoryRus === cat
    );

    return {
      category: item.categoryRus,
      imageCat: categoryData?.img,
    };
  });

  const unique = arr
    ?.map((e) => e.category)
    .filter((category, index, self) => self.indexOf(category) === index)
    .map((category) => arr.find((a) => a.category === category));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % unique?.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [unique]);

  if (isLoading || !unique)
    return <div className={styles.heroLoader}>Завантаження...</div>;

  const currentItem = unique[currentIndex];

  return (
    <section className={`section ${styles.section}`} id="home">
      <div
        key={currentItem.category}
        className={styles.heroLink}
        style={{
          backgroundImage: `url(${currentItem.imageCat})`,
        }}
        onClick={() => {
          handleCategoryClick(currentItem.category);
        }}
      >
        <div className={`container ${styles.heroContainer}`}>
          <figure className={`${styles.heroContent}`}>
            <Image src="/Logo big.png" alt="logo" fill="true" />
          </figure>
        </div>
        <h1 className={styles.titleHidden}>Protein Cookies</h1>
      </div>
    </section>
  );
};

export default Hero;
