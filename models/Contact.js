import mongoose from "mongoose";

const ContactMessageSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
      index: true,
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      maxlength: 20,
    },

    service: {
      type: String,
      required: [true, "Service is required"],
      trim: true,
      enum: [
        "Book Formatting",
        "eBook Formatting",
        "Book Cover Design",
        "WordPress Development",
        "Web Development",
        "Other",
      ],
    },

    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: 10,
      maxlength: 5000,
    },

    status: {
      type: String,
      enum: ["pending", "in_progress", "completed", "closed"],
      default: "pending",
      index: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const ContactMessage =
  mongoose.models.contact_messages ||
  mongoose.model("contact_messages", ContactMessageSchema);

export default ContactMessage;
