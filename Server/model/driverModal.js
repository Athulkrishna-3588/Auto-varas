import mongoose from "mongoose";

const drivrSchema = new mongoose.Schema({
  drivingLicince: {
    type: String,
    required: true,
    trim: true,
  },
  addharcardno: {
    type: String,
    required: true,
    trim: true,
  },
  panno: {
    type: String,
    required: true,
    trim: true,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId, // References the User model
    ref: "User",
    required: true,
  },
});
export default mongoose.model("Driver", drivrSchema);
