import express from "express";

import mailSender from "../utils/mailSender.js";
import User from "../model/userModel.js";

var router = express.Router();

const otpType = {};

router.post("/signup", async (req, res) => {
  // let userSession=await
  console.log(req.body);
  res.status(200).json({
    success: true,
    message: "OTP sent successfullyOTP sent successfully",
    // error:  error.message,
  });
});

// LOGIN AUTHENTICATION
router.post("/login", async (req, res) => {
  // let userSession=await
});

// send otp signup
router.post("/submitOTP", async (req, res) => {
  try {
    let { email } = req.body;

    // creating otp
    let otpCode = Math.floor(Math.random() * 10000 + 1);

    console.log(otpCode, "emailemailemailemailemailemailemailemail");

    const mailResponse = await mailSender(
      email,
      "Verification Email",
      `<h1>Please confirm your OTP</h1>
         <p>Here is your OTP code: ${otpCode}</p>`
    );

    otpType.otpCode = otpCode;
    console.log(otpType, "useruseruseruseruseruseruser");

    console.log("Email sent successfully: ", mailResponse);

    res.status(200).json({
      success: true,
      message: "OTP sent successfullyOTP sent successfully",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// otp verification signup

router.post("/otpVerification", async (req, res) => {
  try {
    const { email, otp } = req.body;
    // Check if all details are provided
    if (!email || !otp) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
        data: null,
      });
    }

    console.log(otpType.otpCode);

    // Find recent OTP for the email
    if (otpType.otpCode != otp) {
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
        data: null,
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(200).json({
        success: true,
        message: "OTP Verified",
        data: existingUser,
      });
    }

    const newUser = await User.create({
      email,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
