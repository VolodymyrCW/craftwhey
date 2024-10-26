import { contacts } from '@/data/contacts';
import styles from './SocialLinks.module.scss';

const SocialLinks = ({ className }) => {
  return (
    <div className={className}>
      {contacts.map(({ socialLinks }) => {
        return (
          socialLinks &&
          socialLinks.map(({ id, href, title }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLinks}
            >
              <svg
                className={`${styles.socialLinksIcon} ${styles[title]}`}
                id={title}
              >
                <use href={`sprite.svg/#icon-${title}`} />
              </svg>
            </a>
          ))
        );
      })}
    </div>
  );
};

export default SocialLinks;
