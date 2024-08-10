import mongoose from 'mongoose';


const productSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            enum: ['Печиво', 'Гранола', 'Протеїн', 'Вафлі'],
            required: true,
            default: 'Печиво',
        },
        // вага для розрахунку енергетичної цінності
        worthWeight: {
            type: String,
            required: true,
        },
        // білки
        protein: {
            type: String,
            required: true,
        },
        // жири
        fats: {
            type: String,
            required: true,
        },
        // вуглеводи
        carbohydrates: {
            type: String,
            required: true,
        },
        kcal: {
            type: String,
            required: true,
        },
        composition: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        feature: {
            type: String,
            enum: ['VEGAN', 'GLUTEN FREE'],
        },
        image: {
            type: String,
            required: true,
        },
        isAbsent: {
            type: Boolean,
            default: false,
        },
        editor: {
            type: String,
        },
    },
    { timestamps: true }
);


//If the collection does not exist - create a new one.
export const Product = mongoose.models?.Product || mongoose.model('Product', productSchema);