"use client"
import DashboardProductItem from '@/components/dashboard/DashboardProductItem/DashboardProductItem';
import DashboardProductFormUpdate from '@/components/dashboard/DashboardProductFormUpdate/DashboardProductFormUpdate';
import Loader from '@/components/Loader/Loader';
import { GetDataWithPathname } from '@/fetch/clientFetch';
import styles from './DashboardProductIdSection.module.scss'


const DashboardProductIdSection = ({ isOwner }) => {
    const { data, isLoading, mutate } = GetDataWithPathname();


    return (
        <section className={styles.dashboardSection}>
            {isLoading
                ? <Loader />
                : <div className={`container ${styles.container}`}>
                    <DashboardProductItem data={data} isLoading={isLoading} isOwner={isOwner} />
                    <DashboardProductFormUpdate data={data} mutate={mutate} isOwner={isOwner} />
                </div>
            }
        </section>
    )
}

export default DashboardProductIdSection