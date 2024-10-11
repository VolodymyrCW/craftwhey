"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderSchema } from "@/yupSchemas/orderSchema";

import styles from "./OrderForm.module.scss";

const OrderForm = () => {
    const initialValues = {
        defaultValues: {
            name: "",
            tel: "",
            email: "",
            lastName: "",
        },
        resolver: yupResolver(orderSchema),
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
        console.log("orderFormData:", data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            noValidate
        >
            <h3 className={styles.formTitle}>Дані для відправки</h3>
            <div className={styles.wrapper}>
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
                    {errors.lastName && (
                        <svg className={styles.iconError}>
                            <use href='/sprite.svg#icon-error' />
                        </svg>
                    )}
                    {!errors.lastName && dirtyFields.lastName && (
                        <svg className={styles.iconError}>
                            <use href='/sprite.svg#icon-success' />
                        </svg>
                    )}
                    <p className={styles.error}>{errors.lastName?.message}</p>

                    <input
                        type='text'
                        {...register("lastName")}
                        placeholder='Прізвище'
                        autoComplete='off'
                        className={(() => {
                            if (errors.lastName) {
                                return `${styles.input} ${styles.errorInput}`;
                            } else if (
                                !errors.lastName &&
                                dirtyFields.lastName
                            ) {
                                return `${styles.input} ${styles.inputSuccess}`;
                            } else {
                                return `${styles.input}`;
                            }
                        })()}
                    />
                </div>

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

export default OrderForm;
