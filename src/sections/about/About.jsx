import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section>
      <div className={`container`}>
        <h2 className={styles.title}>
          Хто такі <span>Craft Whey</span> ?
        </h2>
      </div>
    </section>
  );
};

export default About;
