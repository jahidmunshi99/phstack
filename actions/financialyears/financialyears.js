import connectMongo from "../../dbConnect/connectMongo.js";
import FinancialYearsModel from "../../models/financialyearsModel.js";

// Fetch Data from DB
export const getFinancialYears = async () => {
  try {
    await connectMongo();
    const financialyears = await FinancialYearsModel.find().sort({
      createdOn: -1,
    });
    const res = JSON.parse(JSON.stringify(financialyears));
    return res;
  } catch (error) {
    console.log(error);
  }
};
