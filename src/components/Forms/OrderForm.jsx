"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderSchema } from "@/yupSchemas/orderSchema";
import {
    getCityDepartmentsByCityName,
    getCityDepartmentsByString,
    getSettlementByString,
} from "@/utils/novapostGetData";

import styles from "./OrderForm.module.scss";

const OrderForm = () => {
    const [cities, setCities] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [currentCity, setCurrentCity] = useState("");

    const initialValues = {
        defaultValues: {
            name: "",
            tel: "",
            email: "",
            lastName: "",
            city: "",
            department: "",
        },
        resolver: yupResolver(orderSchema),
        mode: "onChange",
    };

    const form = useForm(initialValues);
    const { register, handleSubmit, formState, reset, setValue } = form;

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
            setCurrentCity("");
            setCities([]);
            setDepartments([]);
        }
    }, [isSubmitSuccessful, reset]);

    useEffect(() => {
        if (!currentCity) return;
        if (currentCity.length < 2) return;
        async function fetchData() {
            const currentDepartments = await getCityDepartmentsByCityName(
                currentCity
            );
            setDepartments(currentDepartments);
        }
        fetchData();
    }, [currentCity]);

    const onCityNameChange = async (event) => {
        setDepartments([]);
        setValue("department", "");
        setValue("city", event.target.value, {
            shouldValidate: true,
            shouldDirty: true,
        });
        setCurrentCity(event.target.value);

        if (event.target.value.length < 2) return;
        const response = await getSettlementByString(event.target.value);
        setCities(response);
    };

    const onDepartsmentChange = async (event) => {
        const response = await getCityDepartmentsByString(
            currentCity,
            event.target.value
        );

        setDepartments(response);
        setValue("department", event.target.value, {
            shouldValidate: true,
            shouldDirty: true,
        });
    };

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
                        className={`${styles.input} ${
                            errors.name
                                ? styles.errorInput
                                : dirtyFields.name
                                ? styles.inputSuccess
                                : ""
                        }`}
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
                        className={`${styles.input} ${
                            errors.lastName
                                ? styles.errorInput
                                : dirtyFields.lastName
                                ? styles.inputSuccess
                                : ""
                        }`}
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
                        className={`${styles.input} ${
                            errors.email
                                ? styles.errorInput
                                : dirtyFields.email
                                ? styles.inputSuccess
                                : ""
                        }`}
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
                        className={`${styles.input} ${
                            errors.tel
                                ? styles.errorInput
                                : dirtyFields.tel
                                ? styles.inputSuccess
                                : ""
                        }`}
                    />
                </div>
                <div className={styles.inputWrap}>
                    {errors.city && (
                        <svg className={styles.iconError}>
                            <use href='/sprite.svg#icon-error' />
                        </svg>
                    )}
                    {!errors.city && dirtyFields.city && (
                        <svg className={styles.iconError}>
                            <use href='/sprite.svg#icon-success' />
                        </svg>
                    )}
                    <p className={styles.error}>{errors.city?.message}</p>
                    <input
                        list='city'
                        type='text'
                        {...register("city")}
                        onChange={onCityNameChange}
                        placeholder='Виберіть місто'
                        autoComplete='off'
                        className={`${styles.input} ${
                            errors.city
                                ? styles.errorInput
                                : dirtyFields.city
                                ? styles.inputSuccess
                                : ""
                        }`}
                    />
                    <datalist id='city'>
                        {cities?.map((el) => {
                            return (
                                <option
                                    key={el}
                                    value={el}
                                    className={styles.input}
                                >
                                    {el}
                                </option>
                            );
                        })}
                    </datalist>
                </div>
                <div className={styles.inputWrap}>
                    {errors.department && (
                        <svg className={styles.iconError}>
                            <use href='/sprite.svg#icon-error' />
                        </svg>
                    )}
                    {!errors.department && dirtyFields.department && (
                        <svg className={styles.iconError}>
                            <use href='/sprite.svg#icon-success' />
                        </svg>
                    )}
                    <p className={styles.error}>{errors.department?.message}</p>
                    <input
                        list='department'
                        type='text'
                        {...register("department")}
                        onChange={onDepartsmentChange}
                        placeholder='Виберіть відділення'
                        autoComplete='off'
                        className={`${styles.input} ${
                            errors.department
                                ? styles.errorInput
                                : dirtyFields.department
                                ? styles.inputSuccess
                                : ""
                        }`}
                    />
                    <datalist id='department'>
                        {departments?.map((el) => {
                            return (
                                <option
                                    key={el}
                                    value={el}
                                    className={styles.input}
                                >
                                    {el}
                                </option>
                            );
                        })}
                    </datalist>
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
