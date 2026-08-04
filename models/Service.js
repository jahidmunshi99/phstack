import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: true,
  },
  order: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "published",
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const Services =
  mongoose.models.Services || mongoose.model("Services", ServiceSchema);

export default Services;
