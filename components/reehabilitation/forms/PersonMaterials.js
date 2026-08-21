"use client";

import { useContext } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { MdDeleteForever } from "react-icons/md";

import { RehabilitationContext } from "../../../provider/reehabilitationProvider";
import Button from "../../common/Button";
import Input from "./Input";
import Select from "./Select";

const PersonMaterials = () => {
  const { ingredients = [] } = useContext(RehabilitationContext);

  const { register, control, setValue } = useFormContext();

  const selectedMaterials =
    useWatch({
      control,
      name: "ingredients_per_person",
    }) || [];

  // Add new material
  const handleAddMaterial = () => {
    const newMaterial = {
      name: ingredients?.[0]?.item || "",
      quantity: "",
      price: "",
    };

    setValue("ingredients_per_person", [...selectedMaterials, newMaterial]);
  };

  // Delete material
  const handleDeleteMaterial = (index) => {
    const updatedMaterials = selectedMaterials.filter(
      (_, materialIndex) => materialIndex !== index,
    );

    setValue("ingredients_per_person", updatedMaterials);
  };

  return (
    <div className="xl:col-span-2">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        {/* Title */}
        <h2 className="mb-5 border-b border-slate-200 pb-3 text-lg font-semibold text-slate-800">
          Per Person Materials
        </h2>

        {/* Table Header */}
        <div className="mb-3 hidden items-center gap-3 md:grid md:grid-cols-12">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-600 md:col-span-4">
            Material
          </label>

          <label className="text-xs font-semibold uppercase tracking-wide text-slate-600 md:col-span-3">
            Quantity
          </label>

          <label className="text-xs font-semibold uppercase tracking-wide text-slate-600 md:col-span-3">
            Price
          </label>

          <div className="md:col-span-2" />
        </div>

        {/* Materials */}
        <div className="space-y-3">
          {selectedMaterials.length === 0 ? (
            <div className="w-full rounded-xl border-2 border-dashed border-slate-100 py-3 text-center text-sm font-semibold text-slate-600">
              No items added yet
            </div>
          ) : (
            selectedMaterials.map((material, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 p-2 transition-all hover:border-blue-400 hover:shadow-sm"
              >
                <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-12">
                  {/* Material */}
                  <div className="md:col-span-4">
                    <Select
                      options={ingredients}
                      labelKey="item"
                      {...register(`ingredients_per_person.${index}.name`, {
                        required: "Material is required",
                      })}
                    />
                  </div>

                  {/* Quantity */}
                  <div className="md:col-span-3">
                    <Input
                      type="number"
                      placeholder="0"
                      {...register(`ingredients_per_person.${index}.quantity`, {
                        required: "Quantity is required",
                        valueAsNumber: true,
                      })}
                    />
                  </div>

                  {/* Price */}
                  <div className="md:col-span-3">
                    <Input
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      {...register(`ingredients_per_person.${index}.price`, {
                        required: "Price is required",
                        valueAsNumber: true,
                      })}
                    />
                  </div>

                  {/* Delete */}
                  <div className="flex justify-end md:col-span-2 md:justify-center">
                    <button
                      type="button"
                      onClick={() => handleDeleteMaterial(index)}
                      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-red-500 transition-colors hover:bg-red-50 hover:text-red-600"
                      aria-label={`Delete material ${index + 1}`}
                    >
                      <MdDeleteForever className="text-2xl" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Add Material */}
          <Button
            type="button"
            onClick={handleAddMaterial}
            className="w-full rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 py-3 font-semibold text-slate-600 transition-all hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
          >
            + Add Material
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PersonMaterials;
