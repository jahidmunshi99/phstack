import mongoose from "mongoose";

const WorkProcessSchema = new mongoose.Schema(
  {
    step: {
      type: Number,
      required: true,
      min: 1,
    },

    badge: {
      type: String,
      default: "",
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },

    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500,
    },

    icon: {
      type: String,
      default: "",
      trim: true,
      // Example:
      // "Search"
      // "MessageCircleMore"
      // "CreditCard"
      // "PackageCheck"
      // "RefreshCcw"
    },

    accentColor: {
      type: String,
      default: "#00A4FE",
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    order: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  },
);

const WorkProcesses =
  mongoose.models.Workprocesses ||
  mongoose.model("Workprocesses", WorkProcessSchema);

export default WorkProcesses;
