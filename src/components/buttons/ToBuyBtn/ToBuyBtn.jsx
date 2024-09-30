import styles from './ToBuyBtn.module.scss';

const ToBuyBtn = ({ item, activeBtnContainer }) => {
  const container = !item.isAbsent
    ? styles.btnContainer + ' ' + activeBtnContainer
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
  );
};

export default ToBuyBtn;
