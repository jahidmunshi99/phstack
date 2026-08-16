"use client";
import Button from "@/components/common/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
// import { useParams } from "next/navigation";
import { IoReturnDownBack } from "react-icons/io5";
import RehabilitationBasicInfo from "../../../../components/reehabilitation/RehabilitationBasicInfo";
import { IngredientsBreakupTable } from "../../../../components/tables/IngredientsBreakupTable";
import UpazilawiseBreakupTable from "../../../../components/tables/UpazilawiseBreakupTable";
import { RehabilitationContext } from "../../../../provider/reehabilitationProvider";

export default function RehabilitationPage() {
  const { data, rehabupazilawise } = useContext(RehabilitationContext);
  const correntId = usePathname().slice((0, 16));
  const currentData = data.filter((item) => item._id === correntId);
  const currentDataupazilawise = rehabupazilawise.filter(
    (item) => item.go_no === currentData[0].go_no
  );

  console.log("currentDataupazilawise", rehabupazilawise);
  console.log(currentData);
  return (
    <>
      <div className="flex justify-between">
        <div className="grid-cols-1">
          <Link href="/rehabilitation" className="inline-block">
            <Button className="hover:bg-slate-900 bg-white hover:text-white">
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

      {/* Reports */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">
        <div className="xl:col-span-3">
          <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            {/* Section Header */}
            <div className="mb-6 border-b border-slate-200 pb-4">
              <h2 className="text-lg font-semibold text-slate-800 sm:text-xl">
                Rehabilitation Information
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                General information about the rehabilitation program
              </p>
            </div>

            {/* Information Grid */}
            <RehabilitationBasicInfo items={currentData[0]} />
          </section>
        </div>
        {/* right side table */}
        <div className="xl:col-span-2">
          <section className="rounded border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-5 border-b border-slate-200 pb-3 text-lg font-semibold text-slate-800">
              জনপ্রতি উপকরণ বরাদ্দ
            </h2>

            {/* Header */}
            <IngredientsBreakupTable
              items={currentData[0].ingredients_per_person}
            />
          </section>
        </div>
      </div>

      {/* Distribution Table */}

      <UpazilawiseBreakupTable data={currentDataupazilawise} />
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
