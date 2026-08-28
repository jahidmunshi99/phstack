"use client";
import Button from "@/components/common/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useRef } from "react";
import { BsFiletypeCsv, BsThreeDotsVertical } from "react-icons/bs";
import { FiPrinter } from "react-icons/fi";
import { IoMdCloudDownload } from "react-icons/io";
import { IoReturnDownBack } from "react-icons/io5";
import { useReactToPrint } from "react-to-print";
import RehabilitationBasicInfo from "../../../../components/reehabilitation/RehabilitationBasicInfo";
import { IngredientsBreakupTable } from "../../../../components/tables/IngredientsBreakupTable";
import UpazilawiseBreakupTable from "../../../../components/tables/UpazilawiseBreakupTable";
import { RehabilitationContext } from "../../../../provider/reehabilitationProvider";

export default function RehabilitationViewPage() {
  const { data, rehabupazilawise } = useContext(RehabilitationContext);
  const correntId = usePathname().slice((0, 16));
  const currentData = data.filter((item) => item._id === correntId);
  const currentDataupazilawise = rehabupazilawise.filter(
    (item) => item.id === currentData[0]._id
  );

  // This function will handle Print Upazila table wise information

  const componentRef = useRef(null);

  const print = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Rehabilitation Report",
  });

  const handlePrint = () => {
    print();
  };

  return (
    <>
      {/* This section only for print */}
      <div className="hidden">
        <div ref={componentRef} className="min-w-fit m-4">
          <div className="text-center text-2xl mt-4 font-bold">
            {currentData[0].title}
          </div>

          <UpazilawiseBreakupTable data={currentDataupazilawise} />
        </div>
      </div>

      {/* main section is here */}

      <div className="flex justify-between">
        <div className="grid-cols-1">
          <Link href="/rehabilitation" className="inline-block">
            <Button className="hover:bg-slate-900 bg-white hover:text-white">
              <IoReturnDownBack className="text-lg" />
            </Button>
          </Link>
        </div>
        <div className="flex justify-items-end gap-2">
          {/* <Link href="/rehabilitation" className="inline-block">
            <Button className="hover:bg-slate-900 hover:text-white">
              Add New
            </Button>
          </Link> */}
          <Button className="hover:bg-slate-900 hover:text-white">
            <BsFiletypeCsv size={23} />
          </Button>

          <Button
            className="hover:bg-slate-900 hover:text-white"
            onClick={() => {
              print();
            }}
          >
            <FiPrinter size={23} />
          </Button>
          <Button>
            <IoMdCloudDownload size={25} />
          </Button>
          <Button className="px-2">
            <BsThreeDotsVertical size={22} />
          </Button>
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
