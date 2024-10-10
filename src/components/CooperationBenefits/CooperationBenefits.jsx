import { benefitsData } from "@/data/cooperationBenefits";
import styles from "./CooperationBenefits.module.scss";

const CooperationBenefits = () => {
    return (
        <ul className={styles.list}>
            {benefitsData.map((el, index) => {
                return (
                    <li key={index} className={styles.item}>
                        <span className={styles.iconBox}>
                            <svg className={styles.icon}>
                                <use href={el.img} />
                            </svg>
                        </span>

                        <p className={styles.title}>{el.title}</p>
                    </li>
                );
            })}
        </ul>
    );
};

export default CooperationBenefits;
