'use client';

import ViewedProducts from '@/components/ViewedProducts/ViewedProducts';
import { SiteContext } from '@/context/siteContext';
import { productsCategory } from '@/data/productsCategory';
import { GetDataForHomeByCollection } from '@/fetch/clientFetch';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import ProductCategory from '../productCategory/ProductCategory';
import styles from './Products.module.scss';

const Products = () => {
  const { data, isLoading } = GetDataForHomeByCollection('products');

  const { filteredData, setFilteredData, handleReset } =
    useContext(SiteContext);

  const [viewedProducts, setViewedProducts] = useState([]);

  const router = useRouter();

  const searchParams = useSearchParams();
  const categoryFromURL = searchParams.get('category');

  useEffect(() => {
    if (!data) return;

    if (categoryFromURL) {
      // Якщо є категорія в URL, фільтруємо продукти
      const filtered = data?.filter(
        (item) => item.categoryRus === categoryFromURL
      );
      setFilteredData(filtered);
    }
  }, [categoryFromURL, data]);

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

  const handlerCategory = (category) => {
    const filteredData = data?.filter((item) => item.categoryRus === category);
    setFilteredData(filteredData);

    router.replace(`/products?category=${category}`, undefined, {
      shallow: true,
    });
  };

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('viewedProducts')) || [];
    setViewedProducts(products);
  }, [filteredData]);

  return (
    <>
      <section className={`section ${styles.section}`}>
        <div className={`container `}>
          <ul className={styles.breadCrumbs}>
            <li className={styles.textLinkAnimation}>
              <Link href="/">Головна</Link>
            </li>{' '}
            /{' '}
            <li onClick={handleReset} className={styles.textLinkAnimation}>
              Продукція
            </li>
            {filteredData !== null && (
              <li className={styles.textLinkAnimation}>
                / {filteredData[0]?.category}
              </li>
            )}
          </ul>
          {!filteredData ? (
            <ul className={` ${styles.categoryList}`}>
              {unique?.map((item) => (
                <li
                  key={item.category}
                  className={styles.categoryCard}
                  onClick={() => {
                    handlerCategory(item.category);
                  }}
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
                </li>
              ))}
            </ul>
          ) : (
            <ProductCategory filteredData={filteredData} />
          )}
        </div>
      </section>
      <ViewedProducts
        viewedProducts={viewedProducts}
        filteredData={filteredData}
      />
    </>
  );
};

export default Products;

// 'use client';

// import { productsCategory } from '@/data/productsCategory';
// import { GetDataForHomeByCollection } from '@/fetch/clientFetch';
// import Image from 'next/image';
// import Link from 'next/link';
// import styles from './Products.module.scss';

// const Products = () => {
//   const { data, isLoading } = GetDataForHomeByCollection('products');

//   const arr = data?.map((item) => {
//     const categoryData = productsCategory.find(
//       ({ cat }) => item.categoryRus === cat
//     );

//     return {
//       category: item.categoryRus,
//       imageCat: categoryData?.img,
//       titleCat: categoryData?.title,
//     };
//   });

//   const unique = arr
//     ?.map((e) => e.category)
//     .filter((category, index, self) => self.indexOf(category) === index)
//     .map((category) => arr.find((a) => a.category === category));

//   return (
//     <section className={styles.section}>
//       <div className={`container ${styles.categoryList}`}>
//         {unique?.map((item) => (
//           <Link
//             href={`/products/${item.category}`}
//             key={item.category}
//             className={styles.categoryCard}
//           >
//             <figure className={styles.imgContainer}>
//               <Image
//                 src={item.imageCat}
//                 alt={item.titleCat}
//                 fill="true"
//                 sizes="100%"
//               />
//             </figure>
//             <h2 className={styles.title}>
//               {item.titleCat}
//               <svg className={styles.arrowSvg}>
//                 <use href="sprite.svg#icon-schevron_right" />
//               </svg>
//             </h2>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Products;
