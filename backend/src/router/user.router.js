const router = require('express').Router();
const { signUp, verifyOtp } = require("../controllers/auth.controller")

router.route('/signup')
    .post(signUp);
router.route('/signup/verify')
    .post(verifyOtp);

module.exports = router;