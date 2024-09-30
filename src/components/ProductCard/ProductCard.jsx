import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import ToBuyBtn from '../buttons/ToBuyBtn/ToBuyBtn';
import styles from './ProductCard.module.scss';

const ProductCard = ({ item }) => {
  // const ProductCard = ({ item, result }) => {

  return (
    <li>
      <Link className={styles.productsItem} href={`/products/${item.slug}`}>
        {/* <Link className={styles.productsItem} href={`/products/${result}/${item.slug}`}> */}
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
              : styles.productsContent + ' ' + styles.productsContentIsAbsent
          }
        >
          {item.isAbsent && (
            <p className={styles.notAvailable}>Немає в наявності</p>
          )}
          <h2 className={styles.title}>{item.name}</h2>
          <p className={styles.price}>{item.price} грн</p>
          <ToBuyBtn
            item={item}
            activeBtnContainer={styles.activeBtnContainer}
          />
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
    </li>
  );
};

export default ProductCard;
