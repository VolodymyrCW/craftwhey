import * as yup from "yup";


export const dashboardProductCreateSchema = yup.object({
    slug: yup.string()
        .required("Slug - обов’язкове поле")
        .test({
            name: "slug",
            test(value, ctx) {
                // this.options.context - from DashboardProductFormCreate context: slugsArr
                const isExist = this.options.context.includes(value);
                if (isExist) {
                    return ctx.createError({
                        message: "Такий slug вже існує"
                    })
                }
                return true;
            },
        }),
    name: yup
        .string()
        .required("Назва - обов’язкове поле"),
    nameRus: yup
        .string()
        .required("Назва російською - обов’язкове поле"),
    // нужно ли ?!?
    category: yup
        .string()
    // .required("Категорія - обов’язкове поле")
    ,
    // нужно ли ?!?
    categoryRus: yup
        .string()
    // .required("Категорія російською - обов’язкове поле")
    ,
    worthWeight: yup
        .number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа"),
    protein: yup
        .number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа"),
    fats: yup
        .number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа"),
    carbohydrates: yup
        .number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа"),
    kcal: yup
        .number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа"),
    composition: yup
        .string()
        .required("Склад - обов’язкове поле"),
    compositionRus: yup
        .string()
        .required("Склад російською - обов’язкове поле"),
    price: yup
        .number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа"),
    peculiarities: yup
        .array(),
    image: yup
        .string()
        .required("Фото - обов’язкове поле"),
    isAbsent: yup
        .boolean()
});