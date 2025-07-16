import express from 'express';
const router = express.Router();
import authController from '../controller/authController.js';
router.post('/register', authController.registerController);

router.post('/login', authController.loginController);

export default router;
