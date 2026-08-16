import { getFinancialYears } from "../../../actions/financialyears/financialyears";
import { getIngredients } from "../../../actions/ingredients/ingredients";
import { getRehabilitations } from "../../../actions/rehabilitations/rehabilitations";
import { getRehabupazilawise } from "../../../actions/rehabupazilawise/rehabupazilawise";
import { getSeassions } from "../../../actions/seassions/seassions";
import RehabilitationProvider from "../../../provider/reehabilitationProvider";

const RehabilitationLayout = async ({ children }) => {
  const data = await getRehabilitations();
  const seassions = await getSeassions();
  const f_years = await getFinancialYears();
  const ingredients = await getIngredients();
  const rehabupazilawise = await getRehabupazilawise();
  const getData = {
    data,
    seassions,
    f_years,
    ingredients,
    rehabupazilawise,
  };
  return (
    <>
      <RehabilitationProvider data={getData}>
        <div className="min-h-screen bg-slate-100 py-2">
          <div className="mx-auto space-y-8 px-2">
            {/* Header */}
            {children}
          </div>
        </div>
      </RehabilitationProvider>
    </>
  );
};

export default RehabilitationLayout;
