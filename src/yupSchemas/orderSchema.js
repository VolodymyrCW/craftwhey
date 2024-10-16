import * as yup from "yup";

const regexPhone = /^\+\d{12}$/;


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

});