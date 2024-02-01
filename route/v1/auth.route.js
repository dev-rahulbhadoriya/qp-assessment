const express = require('express');
const router = express.Router();
const authController = require('../../controller/auth.controller.js');
const validate = require('../../middleware/validate');
const authValidation = require('../../validations/auth.validation');
const auth = require('../../middleware/auth');


router.post('/login', validate(authValidation.login), authController.login);
router.post('/logout', validate(authValidation.logout), authController.logout);
router.post('/register', validate(authValidation.register), authController.register);
router.post('/verify-email', validate(authValidation.verifyEmail), authController.verifyEmail);
router.post('/refresh-tokens', validate(authValidation.refreshTokens), authController.refreshTokens);
router.post('/forgot-password', validate(authValidation.forgotPassword), authController.forgotPassword);
router.post('/reset-password', validate(authValidation.resetPassword), authController.resetPassword);
router.post('/send-verification-email', auth(), authController.sendVerificationEmail);


module.exports = router;
