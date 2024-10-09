import { useState } from 'react';
import styles from './ToBuyBtn.module.scss';

const ToBuyBtn = ({ item, activeBtnContainer, card }) => {
  const [cardBtn, setCardBtn] = useState(card);

  const stylesCardBtn =
    cardBtn === 'card' ? styles.btnCardContainer : styles.btnContainer;

  const container = !item.isAbsent
    ? stylesCardBtn + ' ' + activeBtnContainer
    : styles.btnContainer +
      ' ' +
      styles.btnContainerIsAbsent +
      ' ' +
      activeBtnContainer;

  return (
    <div
      className={container}
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <button
        className={
          cardBtn === 'card'
            ? styles.btn
            : styles.btn + ' ' + styles.btnUniversal
        }
      >
        Купити
      </button>
      <div
        className={
          cardBtn === 'card'
            ? styles.btnBlock + ' ' + styles.btnBlockCard
            : styles.btnBlock + ' ' + styles.btnBlockUniversal
        }
      >
        <button className={styles.btnArrow}>
          <svg>
            <use href="sprite.svg#icon-schevron_left" />
          </svg>
        </button>
        <p>1</p>
        <button className={styles.btnArrow}>
          <svg>
            <use href="sprite.svg#icon-schevron_right" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ToBuyBtn;
