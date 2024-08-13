import * as yup from "yup";


export const dashboardProductUpdateSchema = yup.object({
    newSlug: yup.string()
        .required("Slug - обов’язкове поле")
        .test({
            name: "newSlug",
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
    newName: yup
        .string()
        .required("Назва - обов’язкове поле"),
    newNameRus: yup
        .string()
        .required("Назва російською - обов’язкове поле"),
    newCategory: yup
        .string(),
    newCategoryRus: yup
        .string(),
    newWorthWeight: yup
        .number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа"),
    newProtein: yup
        .number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа"),
    newFats: yup
        .number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа"),
    newCarbohydrates: yup
        .number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа"),
    newKcal: yup
        .number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа"),
    newComposition: yup
        .string()
        .required("Склад - обов’язкове поле"),
    newCompositionRus: yup
        .string()
        .required("Склад російською - обов’язкове поле"),
    newPrice: yup
        .number()
        .moreThan(-1, "Тільки додатні числа")
        .typeError("Тільки числа"),
    newPeculiarities: yup
        .array(),
    newImage: yup
        .string()
        .required("Фото - обов’язкове поле"),
    newIsAbsent: yup
        .boolean()
});