"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { MdDeleteForever } from "react-icons/md";
import Button from "../../common/Button";
import Input from "./Input";
import Select from "./Select";

const PersonMaterials = ({ ingredients }) => {
  const [selectedMaterial, setSelectedMaterial] = useState([]);
  const {
    register,
    watch
    // selectedMaterial,
    // handleDeleteMaterial,
  } = useFormContext();

  const handleAddMaterial = (item) => {
    setSelectedMaterial((prev) => [...prev, item]);
  };

  const handleDeleteMaterial = (index)=>{
const updatedMeterial = selectedMaterial.filter((_, i) => i !== index);
    setSelectedMaterial(updatedMeterial)
  }

  console.log(watch("ingredients_per_person"))

  return (
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
          {selectedMaterial.length === 0 ? (<div className="w-full rounded-xl border-2 border-dashed border-slate-100  py-3 font-semibold text-sm text-slate-600 transition-all text-center"> No Items added yet</div>) : ( selectedMaterial.map((item, index) =>
            <div
                key={index}
                className="rounded-xl border border-slate-200 p-1 transition-all hover:border-blue-400 hover:shadow-sm"
              >
                <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-12">
                  <div className="md:col-span-4">
                    <Select
                      options={ingredients}
                      labelKey="item"
                      {...register(`ingredients_per_person[${index}].name`, {
                        required: true,
                      })}
                    />
                  </div>

                  <div className="md:col-span-3">
                    <Input
                      placeholder="0"
                      {...register(`ingredients_per_person[${index}].quantity`, {
                        required: true,
                      })}
                    />
                  </div>

                  <div className="md:col-span-3">
                    <Input
                      placeholder="0.0"
                      {...register(`ingredients_per_person[${index}].price`, {
                        required: true,
                      })}
                    />
                  </div>

                  <div className="flex justify-end md:col-span-2 md:justify-center">
                    <button
                      type="button"
                      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-red-500 transition-all hover:bg-red-50 hover:text-red-600"
                      onClick={() => handleDeleteMaterial(index)}
                    >
                      <MdDeleteForever className="text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
            ),
          )}

          <Button
            className="w-full rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 py-3 font-semibold text-slate-600 transition-all hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
            onClick={handleAddMaterial}
          >
            + Add Material
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PersonMaterials;
