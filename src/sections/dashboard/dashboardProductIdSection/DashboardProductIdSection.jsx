"use client"
import DashboardProductItem from '@/components/dashboard/DashboardProductItem/DashboardProductItem';
import DashboardProductFormUpdate from '@/components/dashboard/DashboardProductFormUpdate/DashboardProductFormUpdate';
import Loader from '@/components/Loader/Loader';
import { GetDataForHomeByCollection, GetDataWithPathname } from '@/fetch/clientFetch';
import styles from './DashboardProductIdSection.module.scss'


const DashboardProductIdSection = ({ isOwner }) => {
    const { data, isLoading, mutate } = GetDataWithPathname();

    const info = GetDataForHomeByCollection("products");
    const slugsArr = info.data?.map((item) => item.slug).sort((a, b) => { return a - b });
    const filteredSlugsArr = slugsArr?.filter(item => item !== data?.slug)


    return (
        <section className={styles.dashboardSection}>
            {isLoading
                ? <Loader />
                : <div className={`container ${styles.container}`}>
                    <DashboardProductItem data={data} isLoading={isLoading} isOwner={isOwner} />
                    <DashboardProductFormUpdate data={data} mutate={mutate} isOwner={isOwner} slugsArr={filteredSlugsArr} />
                </div>
            }
        </section>
    )
}

export default DashboardProductIdSection