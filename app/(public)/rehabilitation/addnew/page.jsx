import TopDetailsLayout from "../../../../components/reehabilitation/TopDetailsLayout";

const AddnewPage = () => {
  return (
    <>
      <TopDetailsLayout />
      <div className="grid grid-cols-5 gap-5">
        {/* Government Information */}
        <div className="col-span-3">
          <section className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-6 border-b pb-3 md:text-sm text-xl font-semibold">
              Rehabilitation Information
            </h2>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:text-sm">
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
        {/* Materials */}
        <div className="col-span-2">
          <section className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-6 border-b pb-3 text-xl font-semibold md:text-sm">
              Per Person Materials
            </h2>
            <div>
              <div className="flex justify-between gap-5 items-center md:text-sm">
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  MOP
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Quantity"
                    className="w-full rounded border border-slate-300 px-2 py-1 focus:border-blue-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Allotment"
                    className="w-full rounded border border-slate-300 px-2 py-1 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-between gap-5 items-center my-2">
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  MOP
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Quantity"
                    className="w-full rounded border border-slate-300 px-2 py-1 focus:border-blue-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Allotment"
                    className="w-full rounded border border-slate-300 px-2 py-1 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-between gap-5 items-center my-2">
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  MOP
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Quantity"
                    className="w-full rounded border border-slate-300 px-2 py-1 focus:border-blue-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Allotment"
                    className="w-full rounded border border-slate-300 px-2 py-1 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-between gap-5 items-center my-2">
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  MOP
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Quantity"
                    className="w-full rounded border border-slate-300 px-2 py-1 focus:border-blue-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Allotment"
                    className="w-full rounded border border-slate-300 px-2 py-1 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-between gap-5 items-center my-2">
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  MOP
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Quantity"
                    className="w-full rounded border border-slate-300 px-2 py-1 focus:border-blue-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Allotment"
                    className="w-full rounded border border-slate-300 px-2 py-1 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-between gap-5 items-center">
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  MOP
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Quantity"
                    className="w-full rounded border border-slate-300 px-2 py-1 focus:border-blue-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Allotment"
                    className="w-full rounded border border-slate-300 px-2 py-1 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AddnewPage;

function Input({ label, value = "", type = "text", ...props }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <input
        {...props}
        type={type}
        defaultValue={value}
        className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
}
