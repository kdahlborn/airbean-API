import { keyExists } from '../services/api_keys.service.js';
import { verifyToken } from '../utils/jwt.util.js';

export const authorizeAdmin = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        next({
            status: 401,
            message: 'No token provided',
        });
    }

    const verified = verifyToken(token);

    if (!verified.success) {
        next({
            status: 401,
            message: verified.message,
        });
    } else if (verified.user.role !== 'admin') {
        next({
            status: 401,
            message: 'Unauthorized, admin access required',
        });
    }

    next();
};

export const authenticateKey = async (req, res, next) => {
    const key = req.headers['x-api-key'];

    if (!key) {
        next({
            status: 401,
            message: 'No API key provided',
        });
    }

    const result = await keyExists(key);

    if (!result.success) {
        next({
            status: 401,
            message: result.message,
        });
    }
    next();
};

export const authenticateParams = async (req, res, next) => {
    const params = req.params;

    if (!params) {
        next({
            status: 401,
            message: 'No params provided',
        });
    }

    next();
};

export const authenticateBody = async (req, res, next) => {
    const body = req.body;

    if (!body) {
        next({
            status: 401,
            message: 'No body provided',
        });
    }

    next();
};
