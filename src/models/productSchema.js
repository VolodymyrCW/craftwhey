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
    nameRus: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: 'Печиво',
    },
    categoryRus: {
      type: String,
      default: 'Cookie',
    },
    worthWeight: {
      type: String,
      required: true,
    },
    protein: {
      type: String,
      required: true,
    },
    fats: {
      type: String,
      required: true,
    },
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
    compositionRus: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    peculiarities: {
      type: Array,
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
export const Product =
  mongoose.models?.Product || mongoose.model('Product', productSchema);
