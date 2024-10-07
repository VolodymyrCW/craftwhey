import { productsCategory } from '@/data/productsCategory';
import ProductCategory from '@/sections/productsSections/productCategory/ProductCategory';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './ProductList.module.scss';

const ProductList = ({ data, filteredData, handleReset, setFilteredData }) => {
  const router = useRouter();

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

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container`}>
        <ul className={styles.breadCrumbs}>
          <li className={styles.textLinkAnimation}>
            <Link href="/">Головна</Link>
          </li>{' '}
          /{' '}
          <li onClick={handleReset} className={styles.textLinkAnimation}>
            Продукція
          </li>
          {filteredData && (
            <li className={styles.textLinkAnimation}>
              / {filteredData[0]?.category}
            </li>
          )}
        </ul>
        {!filteredData ? (
          <ul className={`${styles.categoryList}`}>
            {unique?.map((item) => (
              <li
                key={item.category}
                className={styles.categoryCard}
                onClick={() => handlerCategory(item.category)}
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
  );
};

export default ProductList;
