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
    maxlength: 150,
  },
  go_date: {
    type: Date,
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
    minlength: 6,
    maxlength: 10,
  },
  robi: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 150,
  },
  f_year: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 10,
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
      ingredient: String,
      quantity: Number,
      unit: String,
    },
  ],
});

const RehabilitationsModel =
  mongoose.models.Rehabilitations ||
  mongoose.model("Rehabilitations", RehabilitationsSchema);

export default RehabilitationsModel;
