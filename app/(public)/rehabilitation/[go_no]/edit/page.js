"use client";

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import PersonMaterials from "../../../../../components/reehabilitation/forms/PersonMaterials";
import RehabilitationInfo from "../../../../../components/reehabilitation/forms/RehabilitationInfo";
import TopDetailsLayout from "../../../../../components/reehabilitation/TopDetailsLayout";
import { RehabilitationContext } from "../../../../../provider/reehabilitationProvider.jsx";

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
  {
    id: 5,
    name: "plants",
  },
  {
    id: 6,
    name: "compost",
  },
  {
    id: 7,
    name: "travel",
  },
  {
    id: 8,
    name: "others",
  },
];

const materials = [
  {
    id: 1,
    name: "mop",
    quantity: 10,
    budget: 100,
  },
];

const seassions = [
  { name: "Robi" },
  { name: "Kharif-1" },
  { name: "Kharif-2" },
];

const EditPage = () => {
  const existingData = useContext(RehabilitationContext);
  console.log(existingData.data);
  // const filterData = existingData.data.filter((item)=> item.go_no === )

  const [selectedMaterial, setSelectedMaterial] = useState([0]);
  const { register, handleSubmit, watch } = useForm();
  const handleAddMaterial = (item) => {
    // Logic to add a new material entry
    setSelectedMaterial([...selectedMaterial, item]); // Reset to the first material after adding
  };

  const handleFormSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  const handleDeleteMaterial = (index) => {
    const updatedMaterials = [...selectedMaterial];
    updatedMaterials.splice(index, 1);
    setSelectedMaterial(updatedMaterials);
  };
  return (
    <>
      <TopDetailsLayout />
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">
          {/* Left Side */}
          <RehabilitationInfo register={register} seassions={seassions} />

          {/* Right Side */}
          <PersonMaterials
            selectedMaterial={selectedMaterial}
            register={register}
            seassions={seassions}
            values={values}
            handleAddMaterial={handleAddMaterial}
            handleDeleteMaterial={handleDeleteMaterial}
          />
        </div>
        {/* test button */}
        <input
          type="submit"
          value="Submit"
          className="mt-5 rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
        />
      </form>
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
    </>
  );
};

export default EditPage;
