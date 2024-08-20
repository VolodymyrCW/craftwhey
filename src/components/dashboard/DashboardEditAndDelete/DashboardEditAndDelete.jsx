import Link from 'next/link';
import { toast } from 'react-toastify';
import { handleDeleteImgFromCloudinary } from '@/utils/handleDeleteImgFromCloudinary';
import { handleDeleteCardFromDB } from '@/utils/handleDeleteCardFromDB';
import { createImagesArrayForDeletingFromCloudinary } from '@/utils/createImagesArrayForDeletingFromCloudinary';
import styles from './DashboardEditAndDelete.module.scss';


const DashboardEditAndDelete = ({ data, pathname, mutate, isOwner }) => {
    // cut /dashboard/ from pathname
    const slicedPathname = pathname.slice(11);
    const url = `/api/${slicedPathname}/${data.slug}`;
    const ownerPage = pathname.endsWith("users");


    return (
        <div className={styles.btnsWrapper}>
            {!ownerPage && <Link
                className={styles.editLink}
                href={`${pathname}/${data.slug}`}
            >
                <svg className={styles.editIcon}>
                    <use href="/sprite.svg#icon-edit" />
                </svg>
            </Link>}

            {isOwner && <svg
                className={styles.deleteIcon}
                onClick={() => {
                    if (confirm("Ви впевнені, що хочете видалити цю картку?")) {
                        const arrForDeleting = createImagesArrayForDeletingFromCloudinary(data);
                        arrForDeleting.map(item => handleDeleteImgFromCloudinary(item));
                        handleDeleteCardFromDB(url, mutate);

                        toast.success(`Картка продукту "${data?.name}" видалена!`);
                    }
                }
                }
            >
                <use href="/sprite.svg#icon-delete" />
            </svg>}
        </div>
    )
}


export default DashboardEditAndDelete;