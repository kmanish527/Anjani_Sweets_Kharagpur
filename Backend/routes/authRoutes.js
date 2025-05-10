import express from 'express';
import { isAuthenticated, login, logout, register, resetPassword, sendResetOtp, sendVerifyOtp, verifyAccount } from './../controllers/authController.js';
import { userAuth } from '../middleware/userAuth.js';


const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/send-verify-otp', userAuth ,sendVerifyOtp);
authRouter.post('/verify-account', userAuth ,verifyAccount);
authRouter.post('/is-authenticated', userAuth, isAuthenticated);
authRouter.post('/send-reset-password-otp', sendResetOtp);
authRouter.post('/reset-password', resetPassword);

export default authRouter;