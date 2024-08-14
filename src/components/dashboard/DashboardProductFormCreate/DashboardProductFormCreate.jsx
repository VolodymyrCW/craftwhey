"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CldUploadButton } from "next-cloudinary";
import { yupResolver } from "@hookform/resolvers/yup";
import { dashboardProductCreateSchema } from "@/yupSchemas/dashboardProductCreateSchema";
import { handleDeleteImgFromCloudinary } from "@/utils/handleDeleteImgFromCloudinary";
import { getDashboardSession } from "@/utils/getDashboardSession";
import styles from './DashboardProductFormCreate.module.scss'
import { createCategoryRus } from "@/utils/createCategoryRus";
import { toast } from "react-toastify";


const DashboardProductFormCreate = ({ mutate, isOwner, slugsArr }) => {
    const initialValues = {
        defaultValues: {
            slug: "",
            name: "",
            nameRus: "",
            category: "",
            categoryRus: "",
            worthWeight: "",
            protein: "",
            fats: "",
            carbohydrates: "",
            kcal: "",
            composition: "",
            compositionRus: "",
            price: "",
            peculiarities: "",
            image: "",
            isAbsent: false,
        },
        resolver: yupResolver(dashboardProductCreateSchema),
        context: slugsArr,
    };

    const form = useForm(initialValues);
    const { register, handleSubmit, formState, reset, getValues, setValue } =
        form;
    const { errors, isSubmitSuccessful, isErrors, isSubmitting } = formState;

    const onSubmit = async (data) => {
        const forSendData = { ...data };
        const session = await getDashboardSession();
        const editor = session.user?.name;
        forSendData.editor = editor;
        const trimedSlug = forSendData.slug.trim();
        forSendData.slug = trimedSlug;
        forSendData.categoryRus = createCategoryRus(forSendData.category);


        try {
            await fetch("/api/products", {
                method: "POST",
                body: JSON.stringify(forSendData),
            });
            // автоматично оновлює сторінку при зміні кількості карток
            mutate();

            toast.success(`Картка продукту "${forSendData.name}" створена!`);
        } catch (err) {
            console.log(err);
            toast.error(err);
        }
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

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
                    id='slug'
                    placeholder=' '
                    {...register("slug")}
                />
                <label htmlFor='slug' className={styles.formLabel}>
                    Slug
                </label>
                <p className={styles.error}>{errors.slug?.message}</p>
            </div>

            <div className={styles.inputGroup}>
                <input
                    type='text'
                    className={styles.formInput}
                    id='name'
                    placeholder=' '
                    {...register("name")}
                />
                <label htmlFor='name' className={styles.formLabel}>
                    Назва
                </label>
                <p className={styles.error}>{errors.name?.message}</p>
            </div>

            <div className={styles.inputGroup}>
                <input
                    type='text'
                    className={styles.formInput}
                    id='nameRus'
                    placeholder=' '
                    {...register("nameRus")}
                />
                <label htmlFor='nameRus' className={styles.formLabel}>
                    Назва російською
                </label>
                <p className={styles.error}>{errors.nameRus?.message}</p>
            </div>

            <div className={styles.radioInputGroup}>
                <div className={styles.radioItemWrapper}>
                    <input
                        type='radio'
                        className={styles.radio}
                        id='fieldCookie'
                        value="Печиво"
                        placeholder=' '
                        {...register("category")}
                        defaultChecked
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
                        {...register("category")}
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
                        {...register("category")}
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
                        {...register("category")}
                    />
                    <label htmlFor='fieldWaffles' className={styles.radioLabel}>
                        Вафлі
                    </label>
                </div>
                <p className={styles.error}>{errors.category?.message}</p>
            </div>

            <div className={styles.inputGroup}>
                <input
                    type='text'
                    className={styles.formInput}
                    id='worthWeight'
                    placeholder=' '
                    {...register("worthWeight")}
                />
                <label htmlFor='worthWeight' className={styles.formLabel}>
                    Розрахункова вага
                </label>
                <p className={styles.error}>{errors.worthWeight?.message}</p>
            </div>

            <div className={styles.inputGroup}>
                <input
                    type='text'
                    className={styles.formInput}
                    id='protein'
                    placeholder=' '
                    {...register("protein")}
                />
                <label htmlFor='protein' className={styles.formLabel}>
                    Білки
                </label>
                <p className={styles.error}>{errors.protein?.message}</p>
            </div>

            <div className={styles.inputGroup}>
                <input
                    type='text'
                    className={styles.formInput}
                    id='fats'
                    placeholder=' '
                    {...register("fats")}
                />
                <label htmlFor='fats' className={styles.formLabel}>
                    Жири
                </label>
                <p className={styles.error}>{errors.fats?.message}</p>
            </div>

            <div className={styles.inputGroup}>
                <input
                    type='text'
                    className={styles.formInput}
                    id='carbohydrates'
                    placeholder=' '
                    {...register("carbohydrates")}
                />
                <label htmlFor='carbohydrates' className={styles.formLabel}>
                    Вуглеводи
                </label>
                <p className={styles.error}>{errors.carbohydrates?.message}</p>
            </div>

            <div className={styles.inputGroup}>
                <input
                    type='text'
                    className={styles.formInput}
                    id='kcal'
                    placeholder=' '
                    {...register("kcal")}
                />
                <label htmlFor='kcal' className={styles.formLabel}>
                    Ккал
                </label>
                <p className={styles.error}>{errors.kcal?.message}</p>
            </div>

            <div className={styles.inputGroup}>
                <textarea
                    type='text'
                    className={styles.formInput}
                    id='composition'
                    placeholder=' '
                    {...register("composition")}
                />
                <label htmlFor='composition' className={styles.formLabel}>
                    Склад
                </label>
                <p className={styles.error}>{errors.composition?.message}</p>
            </div>

            <div className={styles.inputGroup}>
                <textarea
                    type='text'
                    className={styles.formInput}
                    id='compositionRus'
                    placeholder=' '
                    {...register("compositionRus")}
                />
                <label htmlFor='compositionRus' className={styles.formLabel}>
                    Склад російською
                </label>
                <p className={styles.error}>{errors.compositionRus?.message}</p>
            </div>

            <div className={styles.inputGroup}>
                <input
                    type='text'
                    className={styles.formInput}
                    id='price'
                    placeholder=' '
                    {...register("price")}
                />
                <label htmlFor='price' className={styles.formLabel}>
                    Ціна
                </label>
                <p className={styles.error}>{errors.price?.message}</p>
            </div>

            <div className={styles.checkboxInputGroup}>
                <div className={styles.checkboxItemWrapper}>
                    <input
                        type='checkbox'
                        className={styles.checkbox}
                        id='vegan'
                        placeholder=' '
                        value='vegan'
                        {...register("peculiarities")}
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
                        {...register("peculiarities")}
                    />
                    <label htmlFor='gluten-free' className={styles.checkboxLabel}>
                        GLUTEN-FREE
                    </label>
                </div>
                <p className={styles.error}>{errors.peculiarities?.message}</p>
            </div>

            <div className={styles.checkboxInputGroup}>
                <div className={styles.checkboxItemWrapper}>
                    <input
                        type='checkbox'
                        className={styles.checkbox}
                        id='isAbsent'
                        placeholder=' '
                        {...register("isAbsent")}
                    />
                    <label htmlFor='isAbsent' className={styles.checkboxLabel}>
                        Немає в наявності
                    </label>
                </div>

                <p className={styles.error}>{errors.isAbsent?.message}</p>
            </div>

            <div className={styles.inputGroup}>
                <CldUploadButton
                    name='image'
                    className={styles.uploadBtn}
                    onSuccess={(result, widget) => {
                        if (getValues("image") !== "") {
                            const publicId = getValues("image");
                            handleDeleteImgFromCloudinary(publicId);
                            toast.success("Попереднє фото видалено з Cloudinary!");
                        }
                        setValue("image", result.info.public_id, {
                            shouldValidate: true,
                        });
                        widget.close();
                        toast.success("Нове фото додано до Cloudinary!")
                    }}
                    options={{ multiple: false }}
                    uploadPreset='unsigned_preset'
                >
                    Додати фото WEBP формат
                </CldUploadButton>

                <p className={styles.error}>{errors.image?.message}</p>
            </div>

            <button
                type='submit'
                className={styles.submitBtn}
                disabled={isErrors || isSubmitting}
            >
                Створити
            </button>
        </form>
    );
}

export default DashboardProductFormCreate