import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 150,
  },
  slug: {
    type: String,
    required: true,
    lowercase: true,
  },
  author: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 150,
  },
  category: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 150,
  },
  coverImage: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    required: true,
  },
});

const Portfolios =
  mongoose.models.Portfolios || mongoose.model("Portfolios", PortfolioSchema);

export default Portfolios;
