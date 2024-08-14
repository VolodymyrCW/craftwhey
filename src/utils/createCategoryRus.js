export const createCategoryRus = (category) => {

    switch (category) {
        case "Гранола":
            return "Гранола";
        case "Протеїн":
            return "Протеин";
        case "Вафлі":
            return "Вафли";
        default:
            return "Печенье";
    }
} 