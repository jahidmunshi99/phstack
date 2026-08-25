import { useParams } from "next/navigation.js";
import { useContext, useState } from "react";
import { toBanglaNumber } from "../../lib/toBanglaNumber.js";
import { RehabilitationContext } from "../../provider/reehabilitationProvider.jsx";
import Button from "../common/Button";
import AddUpazilaModal from "../reehabilitation/forms/AddUpazilaModal.jsx";

const UpazilawiseBreakupTable = () => {
  const { data, rehabupazilawise } = useContext(RehabilitationContext);
  const params = useParams();
  const currentID = params?.id?.toString();
  const filterData = data?.filter((item) => item._id === currentID) || [];
  const goNo = filterData[0]?.go_no;

  const tableData =
    rehabupazilawise?.filter((item) => item.go_no === goNo) || [];

  const [showUpazilaModal, setShowUpazilaModal] = useState(false);

  const handleAddNewUpazila = () => {
    setShowUpazilaModal(!showUpazilaModal);
  };

  const handleFormSubmit = async (finalData) => {
    console.log("Sending data:", finalData);

    try {
      const response = await fetch("/api/rehabupazilawise", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to save");
      }

      console.log("Saved successfully:", result);

      setShowUpazilaModal(false);
    } catch (error) {
      console.error("Save error:", error);
    }
  };

  return (
    <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-lg relative mt-15">
      {/* Title */}
      <div className="border-b border-slate-200 px-6 py-2">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-slate-800">উপজেলা ভিত্তিক বিভাজন</h2>
          <div className="flex gap-3">
            <Button
              type="button"
              className="rounded-lg bg-cyan-600 px-4 py-2 text-white"
              onClick={() => {
                setShowUpazilaModal(!showUpazilaModal);
              }}
            >
              Add New
            </Button>
            <Button className="">Print</Button>
            <Button>Export CSV</Button>
          </div>
        </div>
      </div>
      {showUpazilaModal && (
        <AddUpazilaModal
          data={filterData[0]}
          onClose={() => {
            setShowUpazilaModal(!showUpazilaModal);
          }}
          handleFormSubmit={handleFormSubmit}
        />
      )}

      <div className="p-2">
        <table className="w-full border-collapse text-sm z-100">
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
                উপকরণের নাম ও পরিমাণ <br /> (মে. টন)
              </th>

              <th
                colSpan={3}
                className="border border-slate-300 px-2 py-3 text-center font-bold"
              >
                উপকরণ বাবদ অর্থ <br />
                (লক্ষ টাকায়)
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
            {tableData.length > 0 ? (
              tableData.map((item, index) => {
                const materials = item?.materials || [];

                const seed = materials[0];
                const dap = materials[1];
                const mop = materials[2];
                const transportCost = materials[3];
                const miscellaneousCost = materials[4];

                const upazilaTotalAllocation = materials.reduce(
                  (total, item) => total + (Number(item.price) || 0),
                  0,
                );

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
                      {item?.upazila_name || "-"}
                    </td>

                    {/* Beneficiary */}
                    <td className="border border-slate-300 px-2 py-3 text-center">
                      {toBanglaNumber(item?.total_beneficiary ?? 0)}
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
                      {toBanglaNumber(seed?.price ?? 0)}
                    </td>

                    {/* DAP */}
                    <td className="border border-slate-300 px-2 py-3 text-center">
                      {toBanglaNumber(dap?.price ?? 0)}
                    </td>

                    {/* MOP */}
                    <td className="border border-slate-300 px-2 py-3 text-center">
                      {toBanglaNumber(mop?.price ?? 0)}
                    </td>

                    {/* ================= OTHER COST ================= */}

                    {/* Transport */}
                    <td className="border border-slate-300 px-2 py-3 text-center">
                      {toBanglaNumber(transportCost?.price ?? 0)}
                    </td>

                    {/* Miscellaneous */}
                    <td className="border border-slate-300 px-2 py-3 text-center">
                      {toBanglaNumber(miscellaneousCost?.price ?? 0)}
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
