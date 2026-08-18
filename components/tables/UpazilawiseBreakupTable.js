import { toBanglaNumber } from "../../lib/toBanglaNumber.js";
import Button from "../common/Button";
const UpazilawiseBreakupTable = ({ data = [] }) => {
  return (
    <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-lg">
      {/* Title */}
      <div className="border-b border-slate-200 px-6 py-2">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-slate-800">উপজেলা ভিত্তিক বিভাজন</h2>
          <div className="flex gap-3">
            <Button className="">Print</Button>
            <Button>Export CSV</Button>
          </div>
        </div>
      </div>

      <div className="p-2">
        <table className="w-full border-collapse text-sm">
          {/* ================= HEADER ================= */}
          <thead className="bg-slate-100">
            {/* Main Header */}
            <tr>
              <th
                rowSpan={2}
                className="border border-slate-300 px-2 py-3 text-center font-bold"
              >
                ক্র.নং
              </th>

              <th
                rowSpan={2}
                className="border border-slate-300 px-2 py-3 text-center font-bold"
              >
                উপজেলার নাম
              </th>

              <th
                rowSpan={2}
                className="border border-slate-300 px-2 py-3 text-center font-bold"
              >
                উপকারভোগী <br /> সংখ্যা
              </th>

              <th
                colSpan={3}
                className="border border-slate-300 px-2 py-3 text-center font-bold"
              >
                উপকরণের নাম ও পরিমাণ (মে. টন)
              </th>

              <th
                colSpan={3}
                className="border border-slate-300 px-2 py-3 text-center font-bold"
              >
                উপকরণ বাবদ অর্থ (লক্ষ টাকায়)
              </th>

              <th
                rowSpan={2}
                className="border border-slate-300 px-2 py-3 text-center font-bold"
              >
                পরিবহন <br /> ব্যয়
              </th>

              <th
                rowSpan={2}
                className="border border-slate-300 px-2 py-3 text-center font-bold"
              >
                আনুষঙ্গিক <br /> ব্যয়
              </th>

              <th
                rowSpan={2}
                className="border border-slate-300 px-2 py-3 text-center font-bold"
              >
                মোট বরাদ্দ
              </th>
            </tr>

            {/* Sub Header */}
            <tr>
              {/* Quantity */}
              <th className="border border-slate-300 px-2 py-3 text-center">
                বীজ
              </th>

              <th className="border border-slate-300 px-2 py-3 text-center">
                ডিএপি
              </th>

              <th className="border border-slate-300 px-2 py-3 text-center">
                এমওপি
              </th>

              {/* Amount */}
              <th className="border border-slate-300 px-2 py-3 text-center">
                বীজ
              </th>

              <th className="border border-slate-300 px-2 py-3 text-center">
                ডিএপি
              </th>

              <th className="border border-slate-300 px-2 py-3 text-center">
                এমওপি
              </th>
            </tr>
          </thead>

          {/* ================= BODY ================= */}
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => {
                const materials = item?.materials || [];

                const seed = materials[0];
                const dap = materials[1];
                const mop = materials[2];
                const transportCost = materials[3];
                const miscellaneousCost = materials[4];

                const upazilaTotalAllocation = materials.reduce(
                  (total, item) => total + (Number(item.amount) || 0),
                  0,
                );
                console.log(upazilaTotalAllocation);
                return (
                  <tr
                    key={item?._id || index}
                    className="transition hover:bg-cyan-50"
                  >
                    {/* Serial */}
                    <td className="border border-slate-300 px-4 py-3 text-center">
                      {toBanglaNumber(index + 1)}
                    </td>

                    {/* Upazila */}
                    <td className="border border-slate-300 px-4 py-3 capitalize font-bold">
                      {item?.upazila?.name || "-"}
                    </td>

                    {/* Beneficiary */}
                    <td className="border border-slate-300 px-2 py-3 text-center">
                      {toBanglaNumber(item?.beneficiaryCount ?? 0)}
                    </td>

                    {/* ================= QUANTITY ================= */}

                    {/* Seed */}
                    <td className="border border-slate-300 px-2 py-3 text-center">
                      {toBanglaNumber(seed?.quantity ?? 0)}
                    </td>

                    {/* DAP */}
                    <td className="border border-slate-300 px-2 py-3 text-center">
                      {toBanglaNumber(dap?.quantity ?? 0)}
                    </td>

                    {/* MOP */}
                    <td className="border border-slate-300 px-2 py-3 text-center">
                      {toBanglaNumber(mop?.quantity ?? 0)}
                    </td>

                    {/* ================= AMOUNT ================= */}

                    {/* Seed */}
                    <td className="border border-slate-300 px-2 py-3 text-center">
                      {toBanglaNumber(seed?.amount ?? 0)}
                    </td>

                    {/* DAP */}
                    <td className="border border-slate-300 px-2 py-3 text-center">
                      {toBanglaNumber(dap?.amount ?? 0)}
                    </td>

                    {/* MOP */}
                    <td className="border border-slate-300 px-2 py-3 text-center">
                      {toBanglaNumber(mop?.amount ?? 0)}
                    </td>

                    {/* ================= OTHER COST ================= */}

                    {/* Transport */}
                    <td className="border border-slate-300 px-2 py-3 text-center">
                      {toBanglaNumber(transportCost?.amount ?? 0)}
                    </td>

                    {/* Miscellaneous */}
                    <td className="border border-slate-300 px-2 py-3 text-center">
                      {toBanglaNumber(miscellaneousCost?.amount ?? 0)}
                    </td>

                    {/* Grand Total */}
                    <td className="border border-slate-300 bg-cyan-50 px-4 py-3 text-center font-bold text-cyan-700">
                      {toBanglaNumber(upazilaTotalAllocation ?? 0)}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan={12}
                  className="border border-slate-300 px-2 py-8 text-center text-slate-500"
                >
                  কোনো তথ্য পাওয়া যায়নি
                </td>
              </tr>
            )}
          </tbody>

          {/* ================= FOOTER ================= */}
          <tfoot className="bg-slate-100 font-bold">
            <tr>
              <td
                colSpan={2}
                className="border border-slate-300 px-2 py-4 text-center text-lg"
              >
                সর্বমোট
              </td>

              {/* Beneficiary */}
              <td className="border border-slate-300 px-2 py-4 text-center">
                ১১০০
              </td>

              {/* Seed Quantity */}
              <td className="border border-slate-300 px-2 py-4 text-center">
                ৫.৫০
              </td>

              {/* DAP Quantity */}
              <td className="border border-slate-300 px-2 py-4 text-center">
                ১১.০০
              </td>

              {/* MOP Quantity */}
              <td className="border border-slate-300 px-2 py-4 text-center">
                ১১.০০
              </td>

              {/* Seed Amount */}
              <td className="border border-slate-300 px-2 py-4 text-center">
                ৩.৬৮৫
              </td>

              {/* DAP Amount */}
              <td className="border border-slate-300 px-2 py-4 text-center">
                ২.০৯০
              </td>

              {/* MOP Amount */}
              <td className="border border-slate-300 px-2 py-4 text-center">
                ১.৯৮০
              </td>

              {/* Transport */}
              <td className="border border-slate-300 px-2 py-4 text-center">
                ০.৪১২৫
              </td>

              {/* Miscellaneous */}
              <td className="border border-slate-300 px-2 py-4 text-center">
                ০.২৭৫
              </td>

              {/* Grand Total */}
              <td className="border border-slate-300 bg-cyan-50 px-2 py-4 text-center text-cyan-700">
                ৮.৪৪২৫
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default UpazilawiseBreakupTable;
