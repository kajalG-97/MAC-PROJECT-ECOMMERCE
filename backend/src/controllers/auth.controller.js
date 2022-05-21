const bcrypt = require("bcryptjs");
const _ = require("lodash");
const axios = require("axios");
const otpGenerator = require('otp-generator');

const User = require("../models/user.model");

const Otp = require("../models/otp.model");


const fast2sms = require('fast-two-sms');



module.exports.signUp = async (req, res) => {


    const user = await User.findOne({
        number: req.body.number
    });


    if (user) return res.status(400).send("User already registered!");


    const OTP = otpGenerator.generate(6, {

        digits: true, alphabets: false, upperCase: false, specialChars: false
    });

    const number = req.body.number;

    console.log('OTP', OTP);

    var options = { authorization: `zJF4tmGjkxCaeVbMKwUB6Q97Oog5cDNArf1TZyuhId2l3pPnXY15dLWu8jx2MR7mA0Fl4NBUHrsya6Cq`, message: `Verification Code ${OTP}`, numbers: [`${number}`] }

    const response = await fast2sms.sendMessage(options)
    // res.send(response)

    const otp = new Otp({ number: number, otp: OTP });

    const salt = await bcrypt.genSalt(10)

    otp.otp = await bcrypt.hash(otp.otp, salt);

    const result = await otp.save();

    return res.status(200).send({massage:"Otp send successfully!",response});
}


module.exports.verifyOtp = async (req, res) => {

    const otpHolder = await Otp.find({
        number: req.body.number
    });

    if (otpHolder.length === 0) return res.status(400).send("You use an Expired OTP!");

    const rightOtpFind = otpHolder[otpHolder.length - 1];

    const validUser = await bcrypt.compare(req.body.otp, rightOtpFind.otp);


    if (rightOtpFind.number === req.body.number && validUser) {
        const user = new User(_.pick(req.body, ["number"]));
        const token = user.generateJWT();

        const result = await user.save();

        const OTPDelete = await Otp.deleteMany({
            number: rightOtpFind.number
        });

        return res.status(200).send({
            message: "User Registration Successfull!",
            token: token,
            data: result
        });

    } else {
        return res.status(400).send("Your OTP was wrong!")
    }
}