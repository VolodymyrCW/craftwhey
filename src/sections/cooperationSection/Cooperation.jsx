import CooperationForm from "@/components/Forms/CooperationForm";

import styles from "./Cooperation.module.scss";
import CooperationBenefits from "@/components/CooperationBenefits/CooperationBenefits";

const Cooperation = () => {
    return (
        <section className={styles.section}>
            <div className={`container`}>
                <h2 className={styles.title}>Раді співпраці з Вами</h2>
                <CooperationBenefits />
                <CooperationForm />
            </div>
        </section>
    );
};

export default Cooperation;
