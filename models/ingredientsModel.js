import mongoose from "mongoose";

const IngredientsSchema = new mongoose.Schema({
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

const IngredientsModel =
  mongoose.models.Ingredients ||
  mongoose.model("Ingredients", IngredientsSchema);

export default IngredientsModel;
