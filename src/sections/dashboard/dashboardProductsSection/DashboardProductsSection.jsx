"use client"
import DashboardProductItem from '@/components/dashboard/DashboardProductItem/DashboardProductItem';
import DashboardProductFormCreate from '@/components/dashboard/DashboardProductFormCreate/DashboardProductFormCreate';
import Loader from '@/components/Loader/Loader';
import { GetDataWithPathname } from '@/fetch/clientFetch';
import styles from './DashboardProductsSection.module.scss'


const DashboardProductsSection = ({ isOwner }) => {
    const { data, isLoading, mutate } = GetDataWithPathname();

    // for yup-validation
    const slugsArr = data?.map((item) => item.slug).sort((a, b) => { return a - b });

    const sortedByUpdateData = data?.sort((a, b) => { return a.updatedAt - b.updatedAt });

    return (
        <section className={styles.dashboardSection}>
            {isLoading
                ? <Loader />
                : <div className={`container ${styles.container}`}>
                    <div className={styles.cardsList}>
                        {sortedByUpdateData.map(item => <DashboardProductItem key={item.slug} data={item} isLoading={isLoading} mutate={mutate} isOwner={isOwner} />)}
                    </div>
                    <DashboardProductFormCreate mutate={mutate} isOwner={isOwner} slugsArr={slugsArr} />
                </div>
            }
        </section>
    )
}

export default DashboardProductsSection