export const createCategoryRus = (category) => {

    switch (category) {
        case "Гранола":
            console.log("Гранола");
            return "Гранола";
        case "Протеїн":
            console.log("Протеин");
            return "Протеин";
        case "Вафлі":
            console.log("Вафли");
            return "Вафли";
        default:
            console.log("Печенье");
            return "Печенье";
    }
} 