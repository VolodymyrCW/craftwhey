"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { CldUploadButton } from "next-cloudinary";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { dashboardProductUpdateSchema } from "@/yupSchemas/dashboardProductUpdateSchema";
import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";
import { getDashboardSession } from "@/utils/getDashboardSession";
import { isDeepEqual } from "@/utils/isDeepEqual";
import { createCategoryRus } from "@/utils/createCategoryRus";
import styles from './DashboardProductFormUpdate.module.scss'


const DashboardProductFormUpdate = ({ data, mutate, isOwner, slugsArr }) => {
    const { slug, name, nameRus, category, categoryRus, worthWeight, protein, fats, carbohydrates, kcal, composition, compositionRus, price, peculiarities, image, isAbsent, editor } = data;

    const receivedData = {
        slug, name, nameRus, category, categoryRus, worthWeight, protein, fats, carbohydrates, kcal, composition, compositionRus, price, peculiarities, image, isAbsent, editor
    }

    const initialValues = {
        defaultValues: {
            newSlug: slug,
            newName: name,
            newNameRus: nameRus,
            newCategory: category,
            newCategoryRus: categoryRus,
            newWorthWeight: worthWeight,
            newProtein: protein,
            newFats: fats,
            newCarbohydrates: carbohydrates,
            newKcal: kcal,
            newComposition: composition,
            newCompositionRus: compositionRus,
            newPrice: price,
            newPeculiarities: peculiarities,
            newImage: image,
            newIsAbsent: isAbsent,
            newEditor: editor,
        },
        resolver: yupResolver(dashboardProductUpdateSchema),
        context: slugsArr,
    };

    const form = useForm(initialValues);
    const { register, handleSubmit, formState, getValues, setValue } =
        form;
    const { errors, isErrors, isSubmitting } = formState;

    const router = useRouter();


    const onSubmit = async (data) => {
        const {
            newSlug,
            newName,
            newNameRus,
            newCategory,
            newCategoryRus,
            newWorthWeight,
            newProtein,
            newFats,
            newCarbohydrates,
            newKcal,
            newComposition,
            newCompositionRus,
            newPrice,
            newPeculiarities,
            newImage,
            newIsAbsent,
            newEditor,
        } = data;

        let updatedData = {
            slug: newSlug,
            name: newName,
            nameRus: newNameRus,
            category: newCategory,
            categoryRus: newCategoryRus,
            worthWeight: newWorthWeight,
            protein: newProtein,
            fats: newFats,
            carbohydrates: newCarbohydrates,
            kcal: newKcal,
            composition: newComposition,
            compositionRus: newCompositionRus,
            price: newPrice,
            peculiarities: newPeculiarities,
            image: newImage,
            isAbsent: newIsAbsent,
            editor: newEditor,
        };

        const trimedSlug = updatedData.slug.trim();
        updatedData.slug = trimedSlug;
        updatedData.categoryRus = createCategoryRus(updatedData.category);

        if (isDeepEqual(receivedData, updatedData)) {
            toast.warn(`Ви не внесли змін в картку "${name}"`);
            return;
        }

        const forSendData = { ...updatedData };
        const session = await getDashboardSession();
        const editor = session.user?.name;
        forSendData.editor = editor;

        try {
            await fetch(`/api/products/${slug}`, {
                method: "PUT",
                body: JSON.stringify(forSendData),
            });

            // по умові виконується або перехід на іншу сторінку, або оновлення існуючої
            (slug !== forSendData.slug) ? router.push(`/dashboard/products/${forSendData.slug}`) : mutate();

            toast.success(`Картка продукту "${forSendData.name}" оновлена!`);

        } catch (err) {
            console.log(err);
            toast.error(err);

        }
    };


    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.dataForm}
            noValidate
        >
            <div className={styles.inputGroup}>
                <input
                    type='text'
                    className={styles.formInput}
                    id='newSlug'
                    placeholder=' '
                    {...register("newSlug")}
                />
                <label htmlFor='newSlug' className={styles.formLabel}>
                    New Slug
                </label>
                <p className={styles.error}>{errors.newSlug?.message}</p>
            </div>

            <div className={styles.inputGroup}>
                <input
                    type='text'
                    className={styles.formInput}
                    id='newName'
                    placeholder=' '
                    {...register("newName")}
                />
                <label htmlFor='newName' className={styles.formLabel}>
                    Нова назва
                </label>
                <p className={styles.error}>{errors.newName?.message}</p>
            </div>

            <div className={styles.inputGroup}>
                <input
                    type='text'
                    className={styles.formInput}
                    id='newNameRus'
                    placeholder=' '
                    {...register("newNameRus")}
                />
                <label htmlFor='newNameRus' className={styles.formLabel}>
                    Нова назва російською
                </label>
                <p className={styles.error}>{errors.newNameRus?.message}</p>
            </div>

            <div className={styles.radioInputGroup}>
                <div className={styles.radioItemWrapper}>
                    <input
                        type='radio'
                        className={styles.radio}
                        id='fieldCookie'
                        value="Печиво"
                        placeholder=' '
                        {...register("newCategory")}

                    />
                    <label htmlFor='fieldCookie' className={styles.radioLabel}>
                        Печиво
                    </label>
                </div>
                <div className={styles.radioItemWrapper}>
                    <input
                        type='radio'
                        className={styles.radio}
                        id='fieldGranola'
                        value="Гранола"
                        placeholder=' '
                        {...register("newCategory")}
                    />
                    <label htmlFor='fieldGranola' className={styles.radioLabel}>
                        Гранола
                    </label>
                </div>
                <div className={styles.radioItemWrapper}>
                    <input
                        type='radio'
                        className={styles.radio}
                        id='fieldProtein'
                        value="Протеїн"
                        placeholder=' '
                        {...register("newCategory")}
                    />
                    <label htmlFor='fieldProtein' className={styles.radioLabel}>
                        Протеїн
                    </label>
                </div>
                <div className={styles.radioItemWrapper}>
                    <input
                        type='radio'
                        className={styles.radio}
                        id='fieldWaffles'
                        value="Вафлі"
                        placeholder=' '
                        {...register("newCategory")}
                    />
                    <label htmlFor='fieldWaffles' className={styles.radioLabel}>
                        Вафлі
                    </label>
                </div>
                <p className={styles.error}>{errors.newCategory?.message}</p>
            </div>

            <div className={styles.inputGroup}>
                <input
                    type='text'
                    className={styles.formInput}
                    id='newWorthWeight'
                    placeholder=' '
                    {...register("newWorthWeight")}
                />
                <label htmlFor='newWorthWeight' className={styles.formLabel}>
                    Нова розрахункова вага
                </label>
                <p className={styles.error}>
                    {errors.newWorthWeight?.message}
                </p>
            </div>

            <div className={styles.inputGroup}>
                <input
                    type='text'
                    className={styles.formInput}
                    id='newProtein'
                    placeholder=' '
                    {...register("newProtein")}
                />
                <label htmlFor='newProtein' className={styles.formLabel}>
                    Нові білки
                </label>
                <p className={styles.error}>
                    {errors.newProtein?.message}
                </p>
            </div>

            <div className={styles.inputGroup}>
                <input
                    type='text'
                    className={styles.formInput}
                    id='newFats'
                    placeholder=' '
                    {...register("newFats")}
                />
                <label htmlFor='newFats' className={styles.formLabel}>
                    Нові жири
                </label>
                <p className={styles.error}>
                    {errors.newFats?.message}
                </p>
            </div>

            <div className={styles.inputGroup}>
                <input
                    type='text'
                    className={styles.formInput}
                    id='newCarbohydrates'
                    placeholder=' '
                    {...register("newCarbohydrates")}
                />
                <label htmlFor='newCarbohydrates' className={styles.formLabel}>
                    Нові вуглеводи
                </label>
                <p className={styles.error}>
                    {errors.newCarbohydrates?.message}
                </p>
            </div>

            <div className={styles.inputGroup}>
                <input
                    type='text'
                    className={styles.formInput}
                    id='newKcal'
                    placeholder=' '
                    {...register("newKcal")}
                />
                <label htmlFor='newKcal' className={styles.formLabel}>
                    Нові ккал
                </label>
                <p className={styles.error}>
                    {errors.newKcal?.message}
                </p>
            </div>

            <div className={styles.inputGroup}>
                <textarea
                    type='text'
                    className={styles.formInput}
                    id='newComposition'
                    placeholder=' '
                    {...register("newComposition")}
                />
                <label htmlFor='newComposition' className={styles.formLabel}>
                    Новий склад
                </label>
                <p className={styles.error}>
                    {errors.newComposition?.message}
                </p>
            </div>

            <div className={styles.inputGroup}>
                <textarea
                    type='text'
                    className={styles.formInput}
                    id='newCompositionRus'
                    placeholder=' '
                    {...register("newCompositionRus")}
                />
                <label htmlFor='newCompositionRus' className={styles.formLabel}>
                    Новий склад російською
                </label>
                <p className={styles.error}>
                    {errors.newCompositionRus?.message}
                </p>
            </div>

            <div className={styles.inputGroup}>
                <input
                    type='text'
                    className={styles.formInput}
                    id='newPrice'
                    placeholder=' '
                    {...register("newPrice")}
                />
                <label htmlFor='newPrice' className={styles.formLabel}>
                    Нова ціна
                </label>
                <p className={styles.error}>
                    {errors.newPrice?.message}
                </p>
            </div>

            <div className={styles.checkboxInputGroup}>
                <div className={styles.checkboxItemWrapper}>
                    <input
                        type='checkbox'
                        className={styles.checkbox}
                        id='vegan'
                        placeholder=' '
                        value='vegan'
                        {...register("newPeculiarities")}
                    />
                    <label htmlFor='vegan' className={styles.checkboxLabel}>
                        VEGAN
                    </label>
                </div>

                <div className={styles.checkboxItemWrapper}>
                    <input
                        type='checkbox'
                        className={styles.checkbox}
                        id='gluten-free'
                        placeholder=' '
                        value='gluten-free'
                        {...register("newPeculiarities")}
                    />
                    <label htmlFor='gluten-free' className={styles.checkboxLabel}>
                        GLUTEN-FREE
                    </label>
                </div>

                <p className={styles.error}>{errors.newPeculiarities?.message}</p>
            </div>

            <div className={styles.checkboxInputGroup}>
                <div className={styles.checkboxItemWrapper}>
                    <input
                        type='checkbox'
                        className={styles.checkbox}
                        id='newIsAbsent'
                        placeholder=' '
                        {...register("newIsAbsent")}
                    />
                    <label htmlFor='newIsAbsent' className={styles.checkboxLabel}>
                        Немає в наявності
                    </label>
                </div>

                <p className={styles.error}>{errors.newIsAbsent?.message}</p>
            </div>

            <div className={styles.inputGroup}>
                <CldUploadButton
                    name='newImage'
                    className={styles.uploadBtn}
                    onSuccess={(result, widget) => {
                        if (getValues("newImage") !== "") {
                            const publicId = getValues("newImage");
                            handleDeleteImgFromCloudinary(publicId);
                            toast.success("Попереднє фото видалено з Cloudinary!");
                        }
                        setValue("newImage", result.info.public_id, {
                            shouldValidate: true,
                        });
                        widget.close();
                        toast.success("Нове фото додано до Cloudinary!");

                    }}
                    options={{ multiple: false }}
                    uploadPreset='unsigned_preset'
                >
                    Змінити фото WEBP формат
                </CldUploadButton>

                <p className={styles.error}>{errors.newImage?.message}</p>
            </div>

            <button
                type='submit'
                className={styles.submitBtn}
                disabled={isErrors || isSubmitting}
            >Змінити</button>
        </form>
    );
}

export default DashboardProductFormUpdate