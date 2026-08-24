"use client";

import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { RehabilitationContext } from "../../../provider/reehabilitationProvider";
import Select from "./Select";

const AddUpazilaModal = ({ onClose }) => {
  const { upazilalist } = useContext(RehabilitationContext);
  // const upazilaList = upazilalist.map((item) => item.upazila_name);

  console.log(upazilalist);

  const { register, watch } = useFormContext();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-[90%] max-w-105 rounded-xl border border-slate-200 bg-white p-5 shadow-2xl">
        <form>
          <div className="grid gap-4">
            {/* Select */}
            <Select
              options={upazilalist}
              value={watch("upazila_name")}
              label="Select Upazila"
              labelKey="upazila_name"
              {...register("upazila_name", { required: true })}
            />

            {/* Number Input */}
          </div>

          {/* Actions */}
          <div className="mt-5 grid w-full grid-cols-2 gap-3">
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200"
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
