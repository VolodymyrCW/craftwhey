import styles from "./NewProducts.module.scss";

const NewProducts = () => {
  return (
    <section id="new-products">
      <div className={`container`}>
        <h2 className={styles.title}>Новинка!</h2>
      </div>
    </section>
  );
};

export default NewProducts;
