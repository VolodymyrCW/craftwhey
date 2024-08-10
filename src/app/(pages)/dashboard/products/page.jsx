import DashboardProductsSection from '@/sections/dashboard/dashboardProductsSection/DashboardProductsSection'
import { checkIsOwner } from '@/utils/checkIsOwner';


const DashboardProductsPage = async () => {
    const isOwner = await checkIsOwner();


    return (
        <>
            <DashboardProductsSection isOwner={isOwner} />
        </>
    )
}


export default DashboardProductsPage