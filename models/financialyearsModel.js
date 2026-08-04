import mongoose from "mongoose";

const FinancialYearsModelSchema = new mongoose.Schema({
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

const FinancialYearsModel =
  mongoose.models.Financialyears ||
  mongoose.model("Financialyears", FinancialYearsModelSchema);

export default FinancialYearsModel;
