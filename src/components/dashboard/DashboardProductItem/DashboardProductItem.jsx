"usr client"
import { usePathname } from 'next/navigation'
import { CldImage } from 'next-cloudinary'
import DashboardEditAndDelete from '../DashboardEditAndDelete/DashboardEditAndDelete'
import styles from './DashboardProductItem.module.scss'


const DashboardProductItem = ({ data, isLoading, mutate, isOwner }) => {
    const pathname = usePathname();
    const isList = pathname.endsWith("products");


    return (
        <>
            {!isLoading && <div className={styles.itemCard}>
                {/* {isOwner && <p><span className={styles.accentText}>Редактор:</span> {data?.editor}</p>} */}
                <p><span className={styles.accentText}>Slug:</span> {data?.slug}</p>
                <p><span className={styles.accentText}>Назва:</span> {data?.name}</p>
                <p><span className={styles.accentText}>Название:</span> {data?.nameRus}</p>
                <p><span className={styles.accentText}>Категорія:</span> {data?.category}</p>
                <p><span className={styles.accentText}>Категория:</span> {data?.categoryRus}</p>
                <p><span className={styles.accentText}>Розрахункова вага</span> - {data?.worthWeight}г</p>
                <p><span className={styles.accentText}>Білки</span> - {data?.protein}г</p>
                <p><span className={styles.accentText}>Жири:</span> - {data?.fats}г</p>
                <p><span className={styles.accentText}>Вуглеводи:</span> - {data?.carbohydrates}г</p>
                <p><span className={styles.accentText}>Ккал</span> - {data?.kcal}</p>
                <p><span className={styles.accentText}>Склад:</span> {data?.composition}</p>
                <p><span className={styles.accentText}>Состав:</span> {data?.compositionRus}</p>
                <p><span className={styles.accentText}>Наявність:</span> {data?.isAbsent ? "Немає" : "Є"}</p>

                <div className={styles.productImagesWrapper}>
                    <CldImage
                        className={styles.productImg}
                        src={data?.image}
                        width={220}
                        height={148}
                        alt={data?.name}
                    />
                    <p className={styles.accentText}>{data?.price} грн</p>
                    <div className={styles.peculiaritiesWrapper}>
                        {data?.peculiarities?.map(peculiarity => <svg key={peculiarity} className={styles.peculiarity}>
                            <use href={`/sprite.svg#icon-${peculiarity}`} />
                        </svg>
                        )}
                    </div>
                </div>

                {isList && (<DashboardEditAndDelete data={data} pathname={pathname} mutate={mutate} isOwner={isOwner} />)}
            </div>}
        </>
    )
}

export default DashboardProductItem