import * as menuService from '../services/menu.service.js';

// Get menu
export const getMenu = async (req, res, next) => {
    const result = await menuService.getMenu();

    if (!result.success) {
        return next({
            status: 500,
            message: `Database failed to retrieve the menu, error: ${result.message}`,
        });
    }

    if (result.menu.length === 0) {
        return res.json({
            success: true,
            message: 'Menu successfully retrieved but is empty',
            menu: result.menu,
        });
    }

    res.json({
        success: true,
        message: 'Menu successfully retrieved',
        menu: result.menu,
    });
};

// Add new product
export const addNewProduct = async (req, res, next) => {
    const result = await menuService.addNewProduct(req.body);

    if (result.success) {
        res.status(201).json({
            success: true,
            message: 'Product added successfully',
            product: result.product,
        });
    } else {
        next({
            status: 404,
            message: result.message,
        });
    }
};

// Update product
export const updateProduct = async (req, res, next) => {
    const { prodId } = req.params;
    const update = req.body;
    const result = await menuService.updateProduct(prodId, update);

    if (result.success) {
        res.json({
            success: true,
            message: 'Product updated successfully',
            product: result.product,
        });
    } else {
        next({
            status: 404,
            message: result.message,
        });
    }
};

// Remove product
export const removeProduct = async (req, res, next) => {
    const { prodId } = req.params;
    const result = await menuService.removeProduct(prodId);

    if (result.success) {
        res.json({
            success: true,
            message: 'Product removed successfully',
            product: result.product,
        });
    } else {
        next({
            status: 404,
            message: result.message,
        });
    }
};
