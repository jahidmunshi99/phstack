import Button from "@/components/common/Button";
import Link from "next/link";
import { IoReturnDownBack } from "react-icons/io5";

export default function RehabilitationPage() {
  return (
    <>
      <Link href="/rehabilitation" className="mb-2 inline-block">
        <Button className="hover:bg-slate-900 hover:text-white">
          <IoReturnDownBack className="text-lg" />
        </Button>
      </Link>
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
          <div className="flex gap-2">
            <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-100">
              Export CSV
            </button>

            <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-100">
              Print
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
          {/* <!-- Table Header --> */}
          {/* <!-- Table --> */}
          <div className="overflow-x-auto p-4">
            <table className="min-w-325 border-collapse text-sm ">
              <thead className="sticky top-0 z-20 bg-slate-50">
                {/* <!-- Group Header --> */}
                <tr className="border-b border-slate-200">
                  <th
                    rowspan="2"
                    className="sticky left-0 z-30 border bg-slate-50 px-4 py-3 text-left font-semibold"
                  >
                    Upazila
                  </th>

                  <th
                    rowspan="2"
                    className="border p-2 text-center font-semibold"
                  >
                    Beneficiaries
                  </th>

                  <th
                    colspan="6"
                    className="border bg-blue-50 p-2 text-center font-semibold text-blue-700"
                  >
                    Physical Distribution
                  </th>

                  <th
                    colspan="7"
                    className="border bg-green-50 p-2 text-center font-semibold text-green-700"
                  >
                    Financial Allocation
                  </th>

                  <th
                    rowspan="2"
                    className="border p-2 text-center font-semibold"
                  >
                    Action
                  </th>
                </tr>

                {/* <!-- Column Header --> */}
                <tr className="border-b border-slate-200">
                  <th className="border p-2">Seed (MT)</th>
                  <th className="border p-2">Plant</th>
                  <th className="border p-2">MOP</th>
                  <th className="border p-2">DAP</th>
                  <th className="border p-2">Urea</th>
                  <th className="border p-2">Compost</th>

                  <th className="border p-2">Seed (Lac)</th>
                  <th className="border p-2">Plant (Lac)</th>
                  <th className="border p-2">MOP (Lac)</th>
                  <th className="border p-2">DAP (Lac)</th>
                  <th className="border p-2">Urea (Lac)</th>
                  <th className="border p-2">Compost (Lac)</th>
                  <th className="border p-2">Others (Lac)</th>
                </tr>
              </thead>

              <tbody>
                <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50">
                  <td className="sticky left-0 border bg-white px-4 py-3 font-medium">
                    Barishal Sadar
                  </td>

                  <td className="border px-2 text-center">250</td>

                  <td className="border p-2 text-center">12</td>
                  <td className="border p-2 text-center">250</td>
                  <td className="border p-2 text-center">6</td>
                  <td className="border p-2 text-center">5</td>
                  <td className="border p-2 text-center">10</td>
                  <td className="border p-2 text-center">3</td>

                  <td className="border p-2 text-center">2.5</td>
                  <td className="border p-2 text-center">1.5</td>
                  <td className="border p-2 text-center">0.6</td>
                  <td className="border p-2 text-center">0.5</td>
                  <td className="border p-2 text-center">0.8</td>
                  <td className="border p-2 text-center">0.4</td>
                  <td className="border p-2 text-center">0</td>

                  <td className="border p-2 text-center">
                    <button className="rounded-md border px-3 py-1 text-xs hover:bg-slate-100">
                      Edit
                    </button>
                  </td>
                </tr>

                <tr className="odd:bg-white even:bg-slate-50 hover:bg-blue-50">
                  <td className="sticky left-0 border bg-white px-4 py-3 font-medium">
                    Bakerganj
                  </td>

                  <td className="border p-2 text-center">200</td>

                  <td className="border p-2 text-center">10</td>
                  <td className="border p-2 text-center">200</td>
                  <td className="border p-2 text-center">5</td>
                  <td className="border p-2 text-center">4</td>
                  <td className="border p-2 text-center">8</td>
                  <td className="border p-2 text-center">2</td>

                  <td className="border p-2 text-center">2</td>
                  <td className="border p-2 text-center">1.2</td>
                  <td className="border p-2 text-center">0.5</td>
                  <td className="border p-2 text-center">0.4</td>
                  <td className="border p-2 text-center">0.7</td>
                  <td className="border p-2 text-center">0.3</td>
                  <td className="border p-2 text-center">0</td>

                  <td className="border p-2 text-center">
                    <button className="rounded-md border px-3 py-1 text-xs hover:bg-slate-100">
                      Edit
                    </button>
                  </td>
                </tr>

                <tr className="bg-sky-100 font-semibold">
                  <td className="sticky left-0 border bg-sky-100 px-4 py-3">
                    Total
                  </td>

                  <td className="border p-2 text-center">450</td>

                  <td className="border p-2 text-center">22</td>
                  <td className="border p-2 text-center">450</td>
                  <td className="border p-2 text-center">11</td>
                  <td className="border p-2 text-center">9</td>
                  <td className="border p-2 text-center">18</td>
                  <td className="border p-2 text-center">5</td>

                  <td className="border p-2 text-center">4.5</td>
                  <td className="border p-2 text-center">2.7</td>
                  <td className="border p-2 text-center">1.1</td>
                  <td className="border p-2 text-center">0.9</td>
                  <td className="border p-2 text-center">1.5</td>
                  <td className="border p-2 text-center">0.7</td>
                  <td className="border p-2 text-center">0</td>

                  <td className="border p-2 text-center">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

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
          <Input label="Seed" type="number" />

          <Input label="Plant" type="number" />

          <Input label="MOP" type="number" />

          <Input label="DAP" type="number" />

          <Input label="Urea" type="number" />

          <Input label="Compost" type="number" />
        </div>

        <div className="mt-6 flex justify-end">
          <button className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700">
            Save Upazila
          </button>
        </div>
      </section>

      <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-lg">
        {/* <!-- Title --> */}

        <div className="border-b border-slate-200 p-6 text-center">
          <h2 className="text-2xl font-bold text-slate-800">
            খরিপ-১ কৃষি প্রণোদনা কর্মসূচি
          </h2>

          <p className="mt-2 text-slate-600">
            ২০২৫-২৬ এর উপজেলাওয়ারী উপকরণ ও আর্থিক বিভাজন
          </p>

          <p className="mt-3 font-semibold text-slate-700">
            ফসলের নামঃ উফশী আউশ
          </p>
        </div>
        <div className="p-2">
          <table className="w-full border-collapse text-sm">
            {/* <!-- Header --> */}

            <thead className="bg-slate-100">
              <tr>
                <th
                  rowspan="2"
                  className="border border-slate-300 px-4 py-3 text-center font-bold"
                >
                  ক্র.নং
                </th>

                <th
                  rowspan="2"
                  className="border border-slate-300 px-4 py-3 text-center font-bold"
                >
                  উপজেলার নাম
                </th>

                <th
                  rowspan="2"
                  className="border border-slate-300 px-4 py-3 text-center font-bold"
                >
                  উপকারভোগী সংখ্যা
                </th>

                <th
                  colspan="3"
                  className="border border-slate-300 px-4 py-3 text-center font-bold"
                >
                  উপকরণের নাম ও পরিমাণ (মে. টন)
                </th>

                <th
                  colspan="7"
                  className="border border-slate-300 px-4 py-3 text-center font-bold"
                >
                  উপকরণ বাবদ অর্থ (লক্ষ টাকায়)
                </th>
                <th
                  rowspan="4"
                  className="border border-slate-300 px-4 py-3 text-center font-bold"
                >
                  মোট বরাদ্দ
                </th>
              </tr>

              <tr>
                <th className="border border-slate-300 px-4 py-3">বীজ</th>

                <th className="border border-slate-300 px-4 py-3">ডিএপি</th>

                <th className="border border-slate-300 px-4 py-3">এমওপি</th>

                <th className="border border-slate-300 px-4 py-3">বীজ</th>

                <th className="border border-slate-300 px-4 py-3">ডিএপি</th>

                <th className="border border-slate-300 px-4 py-3">এমওপি</th>

                <th className="border border-slate-300 px-4 py-3"> সাব মোট</th>

                <th className="border border-slate-300 px-4 py-3">
                  পরিবহন ব্যয়
                </th>

                <th className="border border-slate-300 px-4 py-3">
                  আনুষঙ্গিক ব্যয়
                </th>

                <th className="border border-slate-300 px-4 py-3">সাব মোট</th>
              </tr>
            </thead>

            {/* <!-- Body --> */}

            <tbody>
              <tr className="transition hover:bg-cyan-50">
                <td className="border border-slate-300 px-4 py-3 text-center">
                  ১
                </td>

                <td className="border border-slate-300 px-4 py-3 font-medium">
                  সদর
                </td>

                <td className="border border-slate-300 px-4 py-3 text-right">
                  ১১০০
                </td>

                <td className="border border-slate-300 px-4 py-3 text-right">
                  ৫.৫০
                </td>

                <td className="border border-slate-300 px-4 py-3 text-right">
                  ১১.০০
                </td>

                <td className="border border-slate-300 px-4 py-3 text-right">
                  ১১.০০
                </td>

                <td className="border border-slate-300 px-4 py-3 text-right">
                  ৩.৬৮৫
                </td>

                <td className="border border-slate-300 px-4 py-3 text-right">
                  ২.০৯০
                </td>

                <td className="border border-slate-300 px-4 py-3 text-right">
                  ১.৯৮০
                </td>

                <td className="border border-slate-300 px-4 py-3 text-right font-semibold">
                  ৪.০৭০
                </td>

                <td className="border border-slate-300 px-4 py-3 text-right">
                  ০.৪১২৫
                </td>

                <td className="border border-slate-300 px-4 py-3 text-right">
                  ০.২৭৫
                </td>

                <td className="border border-slate-300  px-4 py-3 text-right font-bold text-cyan-700">
                  ৮.৪৪২৫
                </td>
                <td className="border border-slate-300 bg-cyan-50 px-4 py-3 text-right font-bold text-cyan-700">
                  ৮.৪৪২৫
                </td>
              </tr>
            </tbody>
            <tfoot className="bg-slate-100 font-bold">
              <tr>
                {/* <!-- Total Label --> */}

                <td
                  colspan="2"
                  className="border border-slate-300 px-4 py-4 text-center text-lg"
                >
                  সর্বমোট
                </td>

                {/* <!-- Farmers --> */}

                <td className="border border-slate-300 px-4 py-4 text-right">
                  ১১০০
                </td>

                {/* <!-- Seed --> */}

                <td className="border border-slate-300 px-4 py-4 text-right">
                  ৫.৫০
                </td>

                {/* <!-- DAP --> */}

                <td className="border border-slate-300 px-4 py-4 text-right">
                  ১১.০০
                </td>

                {/* <!-- MOP --> */}

                <td className="border border-slate-300 px-4 py-4 text-right">
                  ১১.০০
                </td>

                {/* <!-- Seed Cost --> */}

                <td className="border border-slate-300 px-4 py-4 text-right">
                  ৩.৬৮৫
                </td>

                {/* <!-- DAP Cost --> */}

                <td className="border border-slate-300 px-4 py-4 text-right">
                  ২.০৯০
                </td>

                {/* <!-- MOP Cost --> */}

                <td className="border border-slate-300 px-4 py-4 text-right">
                  ১.৯৮০
                </td>

                <td className="border border-slate-300 px-4 py-4 text-right">
                  ১.৯৮০
                </td>

                {/* <!-- Material Total --> */}

                <td className="border border-slate-300 px-4 py-4 text-right">
                  ৭.৭৫৫
                </td>

                {/* <!-- Transport --> */}

                <td className="border border-slate-300 px-4 py-4 text-right">
                  ০.৪১২৫
                </td>

                {/* <!-- Misc --> */}

                <td className="border border-slate-300 px-4 py-4 text-right">
                  ০.২৭৫
                </td>

                {/* <!-- Grand Total --> */}

                <td className="border border-slate-300 bg-cyan-50 px-4 py-4 text-right text-cyan-700">
                  ৮.৪৪২৫
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </>
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
  return <th className="border p-2 text-left font-semibold">{children}</th>;
}

function Row({ upazila, beneficiary }) {
  return (
    <tr className="hover:bg-slate-50">
      <td className="border p-2">{upazila}</td>
      <td className="border p-2">{beneficiary}</td>
      <td className="border p-2">{beneficiary}</td>
      <td className="border p-2">{beneficiary}</td>
      <td className="border p-2">0</td>
      <td className="border p-2">0</td>
      <td className="border p-2">{beneficiary}</td>
      <td className="border p-2">0</td>

      <td className="border p-2">
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
