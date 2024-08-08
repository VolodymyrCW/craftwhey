import React from "react";
import styles from "./TopProducts.module.scss";

const TopProducts = () => {
  return (
    <section>
      <div className={`container`}>
        <h2 className={styles.title}>
          <span>ТОП</span> від Craft Whey
        </h2>
      </div>
    </section>
  );
};

export default TopProducts;
