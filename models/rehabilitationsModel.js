import mongoose from "mongoose";

const RehabilitationsSchema = new mongoose.Schema({
  go_no: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },

  title: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 250,
  },

  go_date: {
    type: String,
    required: true,
  },

  total_beneficiary: {
    type: Number,
    required: true,
    min: 1,
    max: 100000,
  },

  session: {
    type: String,
    required: true,
  },

  f_year: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  createdBy: {
    type: String,
    required: true,
  },

  ingredients_per_person: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
});

const RehabilitationsModel =
  mongoose.models.Rehabilitations ||
  mongoose.model("Rehabilitations", RehabilitationsSchema);

export default RehabilitationsModel;
