import Button from "../../../../components/common/Button";
import TopDetailsLayout from "../../../../components/reehabilitation/TopDetailsLayout";
import Input from "../../../../components/reehabilitation/forms/Input";
import Select from "../../../../components/reehabilitation/forms/Select";

const values = [
  {
    id: 1,
    name: "mop",
  },
  {
    id: 2,
    name: "dap",
  },
  {
    id: 3,
    name: "uria",
  },
  {
    id: 4,
    name: "seeds",
  },
];

const AddnewPage = () => {
  return (
    <>
      <TopDetailsLayout />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-4">
        {/* Left Side */}
        <div className="xl:col-span-3">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 border-b border-slate-200 pb-4 text-xl font-semibold text-slate-800">
              Rehabilitation Information
            </h2>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              <Input label="GO No" value="370" />

              <Input label="GO Date" type="date" />

              <Input label="Title" value="লেবু চারা প্রণোদনা" />

              <Input label="Financial Year" value="2025-26" />

              <Input label="Season" value="Robi" />

              <Input label="Total Beneficiaries" value="1500" />

              <Input label="Total Seed (MT)" disabled value="1500" />

              <Input label="Total Fertilizer (MT)" disabled value="1500" />

              <Input label="Total Allotment (TK)" disabled value="1500" />
            </div>
          </section>
        </div>

        {/* Right Side */}
        <div className="xl:col-span-1">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 border-b border-slate-200 pb-4 text-xl font-semibold text-slate-800">
              Per Person Materials
            </h2>

            <div className="space-y-4">
              {/* Material Item */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all hover:border-blue-400 hover:bg-white">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
                  {/* Material */}
                  <div className="sm:col-span-6">
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Material
                    </label>

                    <Select value={values} />
                  </div>

                  {/* Quantity */}
                  <div className="sm:col-span-4">
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Quantity
                    </label>

                    <Input value="0.0" />
                  </div>

                  {/* Delete */}
                  <div className="flex items-end justify-end sm:col-span-2">
                    <Button
                      variant="danger"
                      className="h-11 w-11 rounded-lg p-0 text-lg hover:text-red-500"
                    >
                      ✕
                    </Button>
                    {/* <MdDeleteForever className="h-11 w-11 rounded-lg p-0 text-lg" /> */}
                  </div>
                </div>
              </div>

              {/* Add Button */}

              <Button className="w-full rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 py-3 font-medium text-slate-600 transition-all hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600">
                + Add Material
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AddnewPage;
