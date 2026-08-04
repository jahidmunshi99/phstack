import mongoose from "mongoose";

const RehabilitationsSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 150,
  },
  answer: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 150,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const RehabilitationsModel =
  mongoose.models.Rehabilitations ||
  mongoose.model("Rehabilitations", RehabilitationsSchema);

export default RehabilitationsModel;
