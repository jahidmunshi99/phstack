"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdDeleteForever } from "react-icons/md";
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

const AddnewPage = () => {
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
  return (
    <>
      <TopDetailsLayout />
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">
          {/* Left Side */}
          <div className="xl:col-span-3">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="mb-5 border-b border-slate-200 pb-3 text-xl font-semibold text-slate-800">
                Rehabilitation Information
              </h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <Input
                  label="GO No"
                  value="370"
                  {...register("go_number", { required: true })}
                />

                <Input
                  label="GO Date"
                  type="date"
                  {...register("go_date", { required: true })}
                />

                <Input
                  label="Title"
                  value="লেবু চারা প্রণোদনা"
                  {...register("title", { required: true })}
                />

                <Input
                  label="Financial Year"
                  value="2025-26"
                  {...register("financial_year", { required: true })}
                />

                <Input
                  label="Season"
                  value="Robi"
                  {...register("season", { required: true })}
                />

                <Input
                  label="Total Beneficiaries"
                  value="1500"
                  {...register("total_beneficiaries", { required: true })}
                />

                <Input label="Total Seed (MT)" disabled value="1500" />

                <Input label="Total Fertilizer (MT)" disabled value="1500" />

                <Input label="Total Allotment (TK)" disabled value="1500" />
                <Input label="Seed Allotment (TK)" disabled value="1500" />
                <Input
                  label="Fertilizer Allotment (TK)"
                  disabled
                  value="1500"
                />
                <Input label="Others Allotment (TK)" disabled value="1500" />
              </div>
            </section>
          </div>

          {/* Right Side */}
          <div className="xl:col-span-2">
            <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="mb-5 border-b border-slate-200 pb-3 text-lg font-semibold text-slate-800">
                Per Person Materials
              </h2>

              {/* Header */}
              <div className="mb-3 hidden items-center md:grid md:grid-cols-12 md:gap-3">
                <label className="md:col-span-4 text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Material
                </label>

                <label className="md:col-span-3 text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Quantity
                </label>

                <label className="md:col-span-3 text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Price
                </label>

                <div className="md:col-span-2" />
              </div>

              <div className="space-y-3">
                {selectedMaterial.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-slate-200 p-1 transition-all hover:border-blue-400 hover:shadow-sm"
                  >
                    <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-12">
                      <div className="md:col-span-4">
                        <Select value={values} />
                      </div>

                      <div className="md:col-span-3">
                        <Input value={"0"} />
                      </div>

                      <div className="md:col-span-3">
                        <Input value={"0.0"} />
                      </div>

                      <div className="flex justify-end md:col-span-2 md:justify-center">
                        <button
                          type="button"
                          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-red-500 transition-all hover:bg-red-50 hover:text-red-600"
                        >
                          <MdDeleteForever className="text-2xl" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <Button
                  className="w-full rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 py-3 font-semibold text-slate-600 transition-all hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => {
                    handleAddMaterial();
                  }}
                >
                  + Add Material
                </Button>
              </div>
            </section>
          </div>
        </div>
        {/* test button */}
        <input
          type="submit"
          value="Submit"
          className="mt-5 rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
        />
      </form>
    </>
  );
};

export default AddnewPage;
