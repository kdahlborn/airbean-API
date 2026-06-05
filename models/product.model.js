import mongoose, { Schema, model } from 'mongoose';

const productSchema = new Schema(
    {
        prodId: {
            type: String,
            unique: true,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true },
);

const Product = model('Product', productSchema);

export default Product;
