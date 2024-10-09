import * as yup from "yup";

const regexPhone = /^\+\d{12}$/;


export const cooperationSchema = yup.object({
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
    socialPage: yup
        .string()
        .required("Заповніть це поле")
        .min(3, "Посилання має бути довшим"),

});