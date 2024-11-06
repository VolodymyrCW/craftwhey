import * as yup from "yup";

const regexPhone = /^\+\d{12}$/;

// regex for Ukrainian language and round brackets, coma, dots, dashes
const regexUkr = /^[А-Яа-яҐґЄєІіЇїОоУуЮюЯя0-9\s(),.-]+$/


export const orderSchema = yup.object({
    name: yup
        .string()
        .required("Заповніть це поле")
        .min(3, "Ім’я має бути довшим"),
    tel: yup
        .string()
        .required("Заповніть це поле")
        .matches(regexPhone, "+380123456789"),
    email: yup
        .string()
        .required("Заповніть це поле")
        .email("Не валідний email"),
    lastName: yup
        .string()
        .required("Заповніть це поле")
        .min(2, "Прізвище має бути довшим"),
    city: yup
        .string()
        .required("Заповніть це поле")
        .matches(regexUkr, 'Пошук тільки українською мовою...')
        .min(2, "Мінімум два символи")
        .test({
            name: "city",
            test(value, ctx) {
                const cityExist = this.options.context?.cities.includes(value);

                if (!cityExist) {
                    return ctx.createError({
                        message: "Виберіть місто зі списку"
                    })
                }
                return true;
            },
        }),
    department: yup
        .string()
        .required("Заповніть це поле")
        .test({
            name: "department",
            test(value, ctx) {
                const departmentExist = this.options.context?.departments.includes(value);
                if (!departmentExist) {
                    return ctx.createError({
                        message: "Такого відділення немає"
                    })
                }
                return true;
            },
        }),
    paymentMethod: yup
        .string()
        .required("Виберіть спосіб оплати"),
});