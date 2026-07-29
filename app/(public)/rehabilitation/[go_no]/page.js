import Link from "next/link";

export default function RehabilitationPage() {
  return (
    <div className="min-h-screen bg-slate-100 py-8">
      <div className="mx-auto space-y-8 px-6">
        {/* Header */}

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Rehabilitation Distribution
            </h1>

            <p className="mt-1 text-slate-500">
              Government Distribution Management
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/rehabilitation">
              <button className="rounded-lg bg-gray-600 px-6 py-3 font-medium text-white hover:bg-green-700">
                Back
              </button>
            </Link>
            <button className="rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700">
              Save Distribution
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {/* Government Information */}
          <div className="col-span-3">
            <section className="rounded-xl bg-white p-6 shadow">
              <h2 className="mb-6 border-b pb-3 text-xl font-semibold">
                Rehabilitation Information
              </h2>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
          <div className="col-span-1">
            <section className="rounded-xl bg-white p-6 shadow">
              <h2 className="mb-6 border-b pb-3 text-xl font-semibold">
                Per Person Materials
              </h2>
              <div>
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
        {/* Upazila Entry */}

        <section className="rounded-xl bg-white p-6 shadow">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              Add / Update Upazila Distribution
            </h2>

            <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
              Add Upazila
            </button>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Select Upazila
              </label>

              <select className="w-full rounded-lg border border-slate-300 px-3 py-2">
                <option>Barishal Sadar</option>
                <option>Bakerganj</option>
                <option>Babuganj</option>
              </select>
            </div>

            <Input label="Beneficiaries" type="number" />

            <Input label="MOP" type="number" />

            <Input label="DAP" type="number" />

            <Input label="Urea" type="number" />

            <Input label="Compost" type="number" />

            <Input label="Seed" type="number" />

            <Input label="Plant" type="number" />
          </div>

          <div className="mt-6 flex justify-end">
            <button className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700">
              Save Upazila
            </button>
          </div>
        </section>

        {/* Summary */}

        <section className="grid gap-5 md:grid-cols-4">
          <SummaryCard title="GO Beneficiaries" value="1500" />

          <SummaryCard title="Allocated" value="780" />

          <SummaryCard title="Remaining" value="720" />

          <SummaryCard title="Completion" value="52%" />
        </section>

        {/* Progress */}

        <section className="rounded-xl bg-white p-6 shadow">
          <div className="mb-2 flex justify-between">
            <span className="font-medium">Distribution Progress</span>

            <span className="font-semibold">52%</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full bg-green-500" style={{ width: "52%" }} />
          </div>
        </section>

        {/* Distribution Table */}

        <section className="rounded-xl bg-white p-6 shadow">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Upazila Distribution</h2>

            <input
              placeholder="Search Upazila..."
              className="rounded-lg border px-3 py-2"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <TH>Upazila</TH>
                  <TH>Beneficiaries</TH>
                  <TH>MOP</TH>
                  <TH>DAP</TH>
                  <TH>Urea</TH>
                  <TH>Compost</TH>
                  <TH>Seed</TH>
                  <TH>Plant</TH>
                  <TH>Action</TH>
                </tr>
              </thead>

              <tbody>
                <Row upazila="Barishal Sadar" beneficiary="250" />

                <Row upazila="Bakerganj" beneficiary="200" />

                <Row upazila="Babuganj" beneficiary="180" />

                <tr className="bg-slate-50 font-semibold">
                  <td className="border px-4 py-3">Total</td>

                  <td className="border px-4 py-3">630</td>

                  <td className="border px-4 py-3">630</td>

                  <td className="border px-4 py-3">630</td>

                  <td className="border px-4 py-3">0</td>

                  <td className="border px-4 py-3">0</td>

                  <td className="border px-4 py-3">630</td>

                  <td className="border px-4 py-3">0</td>

                  <td className="border px-4 py-3 text-center">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

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

function SummaryCard({ title, value }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <p className="text-sm text-slate-500">{title}</p>
      <h3 className="mt-2 text-3xl font-bold text-slate-800">{value}</h3>
    </div>
  );
}

function TH({ children }) {
  return (
    <th className="border px-4 py-3 text-left font-semibold">{children}</th>
  );
}

function Row({ upazila, beneficiary }) {
  return (
    <tr className="hover:bg-slate-50">
      <td className="border px-4 py-3">{upazila}</td>
      <td className="border px-4 py-3">{beneficiary}</td>
      <td className="border px-4 py-3">{beneficiary}</td>
      <td className="border px-4 py-3">{beneficiary}</td>
      <td className="border px-4 py-3">0</td>
      <td className="border px-4 py-3">0</td>
      <td className="border px-4 py-3">{beneficiary}</td>
      <td className="border px-4 py-3">0</td>

      <td className="border px-4 py-3">
        <div className="flex gap-2">
          <button className="rounded bg-amber-500 px-3 py-1 text-white">
            Edit
          </button>

          <button className="rounded bg-red-500 px-3 py-1 text-white">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
