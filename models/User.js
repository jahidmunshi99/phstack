import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  password: {
    type: String,
    default: "Anonymous",
    min: 2,
    max: 100,
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
    lowercase: true,
    min: 2,
    max: 100,
  },
});

const User = mongoose.models.User || mongoose.model("User", UsersSchema);

export default User;
