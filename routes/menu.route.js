import { Router } from 'express';
import * as menuController from '../controllers/menu.controller.js';
import * as authMiddleware from '../middlewares/auth.middleware.js';
import { validateProductBody } from '../middlewares/validate.middlewate.js';

const router = Router();

router.use(authMiddleware.authenticateKey);

// GET menu
router.get('/', menuController.getMenu);

// POST menu item
router.post(
    '/',
    validateProductBody,
    authMiddleware.authorizeUser,
    authMiddleware.authorizeAdmin,
    menuController.addNewProduct,
);

// PUT update product
router.put(
    '/:prodId',
    validateProductBody,
    authMiddleware.authorizeUser,
    authMiddleware.authorizeAdmin,
    menuController.updateProduct,
);

// DELETE product
router.delete(
    '/:prodId',
    authMiddleware.authorizeUser,
    authMiddleware.authorizeAdmin,
    menuController.removeProduct,
);

export default router;
