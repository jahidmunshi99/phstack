"use client";

import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { RehabilitationContext } from "../../../provider/reehabilitationProvider";
import Input from "./Input";
import Select from "./Select";

const RehabilitationInfo = () => {
  const { seassions, f_years } = useContext(RehabilitationContext);
  const { watch } = useFormContext();
  const materials = watch("ingredients_per_person") || [];
  const total_beneficiary = watch("total_beneficiary") || [];
  // const goDate = watch("go_date") || [];

  // calculate all allotements
  const totalAllotement =
    materials.reduce((sum, item) => sum + item.price, 0) * total_beneficiary;

  // Seed Allotments Information
  const seedAllotement = materials.find((item) => item.name === "seeds");

  const totalSeedAllotment =
    (seedAllotement?.quantity * total_beneficiary) / 1000;

  const totalSeedAllotmentAmount = seedAllotement?.price * total_beneficiary;

  // Fertilizer Allotments Information
  const fertilizerAllotement = materials.find((item) =>
    ["mop", "dap", "compost"].includes(item?.name),
  );

  console.log(fertilizerAllotement);

  const { register } = useFormContext();
  return (
    <div className="xl:col-span-3">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-5 border-b border-slate-200 pb-3 text-xl font-semibold text-slate-800">
          Rehabilitation Information
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <Input
            label="GO No"
            value={watch("go_no")}
            placeholder="0000-000-000-000-00"
            {...register("go_no", { required: true })}
          />

          {/* <Input
            label="GO Date"
            type="date"
            value={goDate ? new Date(goDate).toISOString().split("T")[0] : ""}
            onChange={(e) => setValue("go_date", e.target.value)}
          /> */}

          <Input
            label="Title"
            value={watch("title")}
            placeholder="কর্মসূচীর নাম"
            {...register("title", { required: true })}
          />

          <Select
            options={f_years}
            value={watch("f_year")}
            label="Financial Year"
            labelKey="f_year"
            {...register("f_year", { required: true })}
          />

          <Select
            label="Season"
            value={watch("session")}
            options={seassions}
            labelKey="s_name"
            {...register("session", { required: true })}
          />

          <Input
            label="Total Beneficiaries"
            value={watch("total_beneficiary")}
            placeholder="0"
            {...register("total_beneficiary", { required: true })}
          />

          <Input
            label="Total Seed (MT)"
            disabled
            value={totalSeedAllotment ? totalSeedAllotment : "0"}
          />

          <Input label="Total Fertilizer (MT)" disabled value="0" />

          <Input
            label="Total Allotment (TK)"
            disabled
            value={totalAllotement ? totalAllotement : "0"}
          />
          <Input
            label="Seed Allotment (TK)"
            disabled
            value={totalSeedAllotmentAmount ? totalSeedAllotmentAmount : "0"}
          />
          <Input label="Fertilizer Allotment (TK)" disabled value="0" />
          <Input label="Others Allotment (TK)" disabled value="0" />
        </div>
      </section>
    </div>
  );
};

export default RehabilitationInfo;
