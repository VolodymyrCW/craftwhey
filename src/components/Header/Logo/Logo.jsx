import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <svg className={styles.logo}>
      <use href="sprite.svg/#icon-Logo" />
    </svg>
  );
};

export default Logo;
