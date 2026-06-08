import Product from '../models/product.model.js';

// Get menu
export const getMenu = async () => {
    try {
        const result = await Product.find();

        return {
            success: true,
            menu: result,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};

// Get product by ID
export const getProductById = async (id) => {
    try {
        const result = await Product.findOne({ _id: id });

        return {
            success: true,
            product: result,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};

// Add new product
export const addNewProduct = async (product) => {
    try {
        const newProduct = await Product.create({
            prodId: `prod-${crypto.randomUUID().substring(0, 5)}`,
            ...product,
        });

        return {
            success: true,
            product: newProduct,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};

// Update product
export const updateProduct = async (prodId, update) => {
    try {
        const productExist = await Product.findOne({ prodId });
        if (!productExist)
            throw new Error('Could not find product with the provided prodId');

        const updatedProduct = await Product.findOneAndUpdate(
            { prodId },
            { ...update },
            { returnDocument: 'after' },
        );

        return {
            success: true,
            product: updatedProduct,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};

// Remove product
export const removeProduct = async (prodId) => {
    try {
        const productExist = await Product.findOne({ prodId });
        if (!productExist)
            throw new Error('Could not find product with the provided prodId');

        const removedProduct = await Product.findOneAndDelete({ prodId });

        return {
            success: true,
            product: removedProduct,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
        };
    }
};
