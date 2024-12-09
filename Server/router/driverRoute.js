import express from "express";
import Driver from "../model/driverModal.js"
import User from "../model/userModel.js"; // Import User model

const router = express.Router();

router.post("/driver-register", async (req, res) => {
  try {
    const { drivingLicince, addharcardno, panno, userID } = req.body;

    // Validate input
    if (!drivingLicince || !addharcardno || !panno || !userID) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Verify that the userID exists in the User collection
    const existingUser = await User.findById(userID);
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User with the provided ID does not exist.",
      });
    }

    // Create the Driver record
    const newDriver = await Driver.create({
      drivingLicince,
      addharcardno,
      panno,
      userID,
    });

    res.status(201).json({
      success: true,
      message: "Driver registered successfully.",
      driver: newDriver,
    });
  } catch (error) {
    console.error("Driver Setup error:", error.message);
    res.status(500).json({
      success: false,
      message: "An error occurred during driver registration.",
      error: error.message,
    });
  }
});

export default router;

