import mongoose from "mongoose";

const RehabupazilaWiseSchema = new mongoose.Schema({
  go_no: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },

  upazila_name: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  go_date: {
    type: String,
    required: true,
  },

  total_beneficiary: {
    type: String,
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

  materials: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
});

const RehabupazilawiseModel =
  mongoose.models.Rehabupazilawise ||
  mongoose.model("Rehabupazilawise", RehabupazilaWiseSchema);

export default RehabupazilawiseModel;
