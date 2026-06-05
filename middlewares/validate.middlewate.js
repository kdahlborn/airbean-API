import User from '../models/user.model.js';

// Validate login body
export const validateLoginBody = (req, res, next) => {
    if (!req.body) {
        next({
            status: 400,
            message: 'No request body provided',
        });
    }

    const { username, password } = req.body;

    if (!username || !password) {
        next({
            status: 400,
            message: 'Username and password is required in request body',
        });
    }

    next();
};

// Validate register body
export const validateRegisterBody = (req, res, next) => {
    if (!req.body) {
        next({
            status: 400,
            message: 'No request body provided',
        });
    }

    const { username, password, role } = req.body;

    if (!username || !password || !role) {
        next({
            status: 400,
            message: 'Username, password and role are required in request body',
        });
    }

    next();
};

// Validate cart body
export const validateCartBody = (req, res, next) => {
    if (!req.body) {
        next({
            status: 400,
            message: 'No request body provided',
        });
    }

    const { prodId, qty } = req.body;

    if (!prodId || !qty) {
        next({
            status: 400,
            message: 'prodId and qty are required in request body',
        });
    } else if (qty < 1) {
        next({
            status: 403,
            message: 'qty need to be 1 or higher',
        });
    }

    next();
};

// Validate order body
export const validateOrderBody = (req, res, next) => {
    if (!req.body) {
        next({
            status: 400,
            message: 'No request body provided',
        });
    }

    const { cartId } = req.body;

    if (!cartId) {
        next({
            status: 400,
            message: 'cartId is required in request body',
        });
    }

    next();
};

// Validate product body
export const validateProductBody = (req, res, next) => {
    if (!req.body) {
        next({
            status: 400,
            message: 'No request body provided',
        });
    }

    const { title, desc, price } = req.body;
    if (!title || !desc || !price) {
        next({
            status: 400,
            message: 'title, desc and price are required in request body',
        });
    }

    next();
};
