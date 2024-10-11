"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cooperationSchema } from "@/yupSchemas/cooperationSchema";

import styles from "./CooperationForm.module.scss";

const CooperationForm = () => {
    const initialValues = {
        defaultValues: {
            name: "",
            tel: "",
            email: "",
            socialPage: "",
        },
        resolver: yupResolver(cooperationSchema),
        mode: "onChange",
    };

    const form = useForm(initialValues);
    const { register, handleSubmit, formState, reset } = form;
    const {
        errors,
        isSubmitSuccessful,
        isValid,
        isSubmitting,
        isSubmitted,
        dirtyFields,
    } = formState;

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    const onSubmit = (data) => {
        console.log("cooperationFormData:", data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            noValidate
        >
            <h3 className={styles.formTitle}>
                Заповніть будь-ласка Ваші дані і наш менеджер передзвонить Вам
            </h3>
            <div className={styles.wrapper}>
                <div className={styles.innerBox}>
                    <div className={styles.inputWrap}>
                        {errors.name && (
                            <svg className={styles.iconError}>
                                <use href='/sprite.svg#icon-error' />
                            </svg>
                        )}
                        {!errors.name && dirtyFields.name && (
                            <svg className={styles.iconError}>
                                <use href='/sprite.svg#icon-success' />
                            </svg>
                        )}
                        <p className={styles.error}>{errors.name?.message}</p>
                        <input
                            type='text'
                            {...register("name")}
                            placeholder='Ім’я'
                            maxLength='30'
                            autoComplete='off'
                            className={(() => {
                                if (errors.name) {
                                    return `${styles.input} ${styles.errorInput}`;
                                } else if (!errors.name && dirtyFields.name) {
                                    return `${styles.input} ${styles.inputSuccess}`;
                                } else {
                                    return `${styles.input}`;
                                }
                            })()}
                        />
                    </div>
                    <div className={styles.inputWrap}>
                        {errors.tel && (
                            <svg className={styles.iconError}>
                                <use href='/sprite.svg#icon-error' />
                            </svg>
                        )}
                        {!errors.tel && dirtyFields.tel && (
                            <svg className={styles.iconError}>
                                <use href='/sprite.svg#icon-success' />
                            </svg>
                        )}
                        <p className={styles.error}>{errors.tel?.message}</p>
                        <input
                            type='text'
                            {...register("tel")}
                            placeholder='Телефон'
                            autoComplete='off'
                            maxLength='14'
                            className={(() => {
                                if (errors.tel) {
                                    return `${styles.input} ${styles.errorInput}`;
                                } else if (!errors.tel && dirtyFields.tel) {
                                    return `${styles.input} ${styles.inputSuccess}`;
                                } else {
                                    return `${styles.input}`;
                                }
                            })()}
                        />
                    </div>
                </div>
                <div className={styles.innerBox}>
                    <div className={styles.inputWrap}>
                        {errors.email && (
                            <svg className={styles.iconError}>
                                <use href='/sprite.svg#icon-error' />
                            </svg>
                        )}
                        {!errors.email && dirtyFields.email && (
                            <svg className={styles.iconError}>
                                <use href='/sprite.svg#icon-success' />
                            </svg>
                        )}
                        <p className={styles.error}>{errors.email?.message}</p>

                        <input
                            type='text'
                            {...register("email")}
                            placeholder='Email'
                            autoComplete='off'
                            className={(() => {
                                if (errors.email) {
                                    return `${styles.input} ${styles.errorInput}`;
                                } else if (!errors.email && dirtyFields.email) {
                                    return `${styles.input} ${styles.inputSuccess}`;
                                } else {
                                    return `${styles.input}`;
                                }
                            })()}
                        />
                    </div>
                    <div className={styles.inputWrap}>
                        {errors.socialPage && (
                            <svg className={styles.iconError}>
                                <use href='/sprite.svg#icon-error' />
                            </svg>
                        )}
                        {!errors.socialPage && dirtyFields.socialPage && (
                            <svg className={styles.iconError}>
                                <use href='/sprite.svg#icon-success' />
                            </svg>
                        )}
                        <p className={styles.error}>
                            {errors.socialPage?.message}
                        </p>

                        <input
                            type='text'
                            {...register("socialPage")}
                            placeholder='Сторінка в соцмережах'
                            autoComplete='off'
                            className={(() => {
                                if (errors.socialPage) {
                                    return `${styles.input} ${styles.errorInput}`;
                                } else if (
                                    !errors.socialPage &&
                                    dirtyFields.socialPage
                                ) {
                                    return `${styles.input} ${styles.inputSuccess}`;
                                } else {
                                    return `${styles.input}`;
                                }
                            })()}
                        />
                    </div>
                </div>
            </div>
            <button
                type='submit'
                disabled={isSubmitting}
                className={
                    !isSubmitted || (isValid && isSubmitted)
                        ? `${styles.submitButton} ${styles.activeBtn}`
                        : styles.submitButton
                }
            >
                Відправити
            </button>
        </form>
    );
};

export default CooperationForm;
