import mongoose from "mongoose";

const UpazilaListSchema = new mongoose.Schema({
  upazila_name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 150,
  },
  dist_name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 150,
  },
  divi_name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 150,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: Date,
    default: Date.now,
  },
});

const UpazilaListModel =
  mongoose.models.Upazilalist ||
  mongoose.model("Upazilalist", UpazilaListSchema);

export default UpazilaListModel;
