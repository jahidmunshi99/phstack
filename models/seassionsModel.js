import mongoose from "mongoose";

const SeassionsSchema = new mongoose.Schema({
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

const SeassionsModel =
  mongoose.models.Seassions || mongoose.model("Seassions", SeassionsSchema);

export default SeassionsModel;
