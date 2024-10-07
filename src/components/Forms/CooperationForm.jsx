"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cooperationSchema } from "@/yupSchemas/cooperationSchema";

import styles from "./Form.module.scss";

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
    const { errors, isSubmitSuccessful, isValid, isSubmitting, isSubmitted } =
        formState;

    // console.log("isValid:", isValid);
    // console.log("isSubmitted:", isSubmitted);

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
                        {/* <svg className={styles.iconMark}>
                        <use href='/sprite.svg#snowflake'></use>
                    </svg> */}
                        <p className={styles.error}>{errors.name?.message}</p>

                        <input
                            type='text'
                            {...register("name")}
                            placeholder='Ім’я'
                            maxLength='30'
                            autoComplete='off'
                            className={
                                errors.name
                                    ? `${styles.input} ${styles.errorInput}`
                                    : styles.input
                            }
                        />
                    </div>
                    <div className={styles.inputWrap}>
                        {/* <svg className={styles.iconMark}>
                        <use href='/sprite.svg#snowflake'></use>
                    </svg> */}
                        <p className={styles.error}>{errors.tel?.message}</p>

                        <input
                            type='text'
                            {...register("tel")}
                            placeholder='Телефон'
                            autoComplete='off'
                            maxLength='15'
                            className={
                                errors.email
                                    ? `${styles.input} ${styles.errorInput}`
                                    : styles.input
                            }
                        />
                    </div>
                </div>
                <div className={styles.innerBox}>
                    <div className={styles.inputWrap}>
                        {/* <svg className={styles.iconMark}>
                        <use href='/sprite.svg#snowflake'></use>
                    </svg> */}
                        <p className={styles.error}>{errors.email?.message}</p>

                        <input
                            type='text'
                            {...register("email")}
                            placeholder='Email'
                            autoComplete='off'
                            className={
                                errors.name
                                    ? `${styles.input} ${styles.errorInput}`
                                    : styles.input
                            }
                        />
                    </div>
                    <div className={styles.inputWrap}>
                        {/* <svg className={styles.iconMark}>
                        <use href='/sprite.svg#snowflake'></use>
                    </svg> */}
                        <p className={styles.error}>
                            {errors.socialPage?.message}
                        </p>

                        <input
                            type='text'
                            {...register("socialPage")}
                            placeholder='Сторінка в соцмережах'
                            autoComplete='off'
                            className={
                                errors.email
                                    ? `${styles.input} ${styles.errorInput}`
                                    : styles.input
                            }
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

                // className={(() => {
                //     if (!isSubmitted) {
                //         return `${styles.submitButton} ${styles.activeBtn}`;
                //     } else if (isValid && isSubmitted) {
                //         return `${styles.submitButton} ${styles.activeBtn}`;
                //     } else {
                //         return styles.submitButton;
                //     }
                // })()}
            >
                Відправити
            </button>
        </form>
    );
};

export default CooperationForm;
