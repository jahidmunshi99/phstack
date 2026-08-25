"use client";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { RehabilitationContext } from "../../../provider/reehabilitationProvider";
import Input from "./Input";
import Select from "./Select";

const AddUpazilaModal = ({ onClose, data, handleFormSubmit }) => {
  const { upazilalist = [] } = useContext(RehabilitationContext);
  const { register, handleSubmit, reset, watch } = useForm();
  const benificary = watch("total_beneficiary");

  const initialData = {
    go_no: data.go_no,
    title: data.title,
    go_date: data.go_date,
    session: data.session,
    f_year: data.f_year,
    createdAt: new Date().toISOString(),
    createdBy: "admin",
    materials: data.ingredients_per_person.map((item) => ({
      name: item.name,
      quantity: Number(item.quantity) * Number(benificary),
      price: Number(item.price) * Number(benificary),
    })),
  };

  const handleAddUpdazilaInfo = (data) => {
    const finalData = { ...data, ...initialData };
    console.log(finalData);
    handleFormSubmit(finalData);
    reset();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-[90%] max-w-105 rounded-xl border border-slate-200 bg-white p-5 shadow-2xl">
        <form onSubmit={handleSubmit(handleAddUpdazilaInfo)}>
          <div className="grid gap-4">
            {/* Upazila */}
            <Select
              options={upazilalist}
              label="Select Upazila"
              labelKey="upazila_name"
              {...register("upazila_name", {
                required: "Please select an upazila",
              })}
            />

            {/* Beneficiary */}
            <Input
              label="Number of Beneficiary"
              type="number"
              placeholder="Enter number"
              {...register("total_beneficiary", {
                required: "Beneficiary number is required",
                valueAsNumber: true,
                min: {
                  value: 1,
                  message: "Number must be greater than 0",
                },
              })}
            />
          </div>

          {/* Actions */}
          <div className="mt-5 grid w-full grid-cols-2 gap-3">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="cursor-pointer rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-200"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUpazilaModal;
