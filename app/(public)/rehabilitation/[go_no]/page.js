import Button from "@/components/common/Button";
import Link from "next/link";
import { IoReturnDownBack } from "react-icons/io5";

export default function RehabilitationPage() {
  return (
    <>
      <div className="flex justify-between">
        <div className="grid-cols-1">
          <Link href="/rehabilitation" className="inline-block">
            <Button className="hover:bg-slate-900 hover:text-white">
              <IoReturnDownBack className="text-lg" />
            </Button>
          </Link>
        </div>
        <div className="flex justify-items-end gap-4">
          {/* <Link href="/rehabilitation" className="inline-block">
            <Button className="hover:bg-slate-900 hover:text-white">
              Add New
            </Button>
          </Link> */}
          <Link href="/rehabilitation" className="inline-block">
            <Button className="hover:bg-slate-900 hover:text-white">
              Export CSV
            </Button>
          </Link>
          <Link href="/rehabilitation" className="inline-block">
            <Button className="hover:bg-slate-900 hover:text-white">
              Print
            </Button>
          </Link>
        </div>
      </div>
      {/* Summary */}

      <section className="grid gap-5 md:grid-cols-4">
        <SummaryCard title="GO Beneficiaries" value="1500" />

        <SummaryCard title="Allocated" value="780" />

        <SummaryCard title="Remaining" value="720" />

        <SummaryCard title="Completion" value="52%" />
      </section>

      {/* Distribution Table */}

      <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-lg">
        <div className="border-b border-slate-200 p-6 text-start">
          <div className="font-bold text-slate-800">কর্মসূচির নাম:</div>

          <div className="mt-2 text-slate-600">
            <span className="font-bold">জিও নং: </span>০১-০১-০০০০-০০০১-০০১,
            <span className="font-bold">তারিখঃ</span> ০১-০১-২০২৩ ইং,
            <span className="font-bold">মৌসুমঃ</span>খরিপ-২
          </div>
        </div>

        {/* <!-- Title --> */}
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
