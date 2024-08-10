import DashboardProductIdSection from '@/sections/dashboard/dashboardProductIdSection/DashboardProductIdSection'
import { checkIsOwner } from '@/utils/checkIsOwner';


const DashboardProductIdPage = async () => {
    const isOwner = await checkIsOwner();


    return (
        <>
            <DashboardProductIdSection isOwner={isOwner} />
        </>
    )
}


export default DashboardProductIdPage