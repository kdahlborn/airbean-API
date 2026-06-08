import { Router } from 'express';
import * as authMiddleware from '../middlewares/auth.middleware.js';
import { loginUser, registerUser } from '../controllers/auth.controller.js';
import {
    validateLoginBody,
    validateRegisterBody,
} from '../middlewares/validate.middlewate.js';

const router = Router();

router.use(authMiddleware.authenticateKey);
// router.use(authMiddleware.authenticateBody);

// POST register user
router.post('/register', validateRegisterBody, registerUser);

// POST login user
router.post('/login', validateLoginBody, loginUser);

export default router;
