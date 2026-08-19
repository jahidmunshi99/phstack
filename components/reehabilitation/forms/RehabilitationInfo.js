"use client";

import { useFormContext } from "react-hook-form";
import Input from "./Input";
import Select from "./Select";

const f_years = [{ f_year: "2026-27" }];
const seassions = [{ session: "robi" }];

const RehabilitationInfo = ({ formData }) => {
  console.log(formData);
  // const { seassions, f_years } = initialData;

  // calculate all allotements
  const totalAllotement =
    formData?.ingredients_per_person.reduce(
      (sum, item) => sum + item.price,
      0,
    ) * formData?.total_beneficiary;

  // Seed Allotments Information
  const seedAllotement = formData?.ingredients_per_person.find(
    (item) => item.name === "seeds",
  );

  const totalSeedAllotment =
    (seedAllotement?.quantity * formData?.total_beneficiary) / 1000;
  console.log(totalSeedAllotment);

  const totalSeedAllotmentAmount =
    seedAllotement?.price * formData?.total_beneficiary;
  console.log(totalSeedAllotment);

  // Fertilizer Allotments Information
  const fertilizerAllotement = formData?.ingredients_per_person.find(
    (item) => item?.name === "mop" || "dap" || "compost",
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
            value={formData?.go_no}
            placeholder="0000-000-000-000-00"
            {...register("go_no", { required: true })}
          />

          <Input
            label="GO Date"
            value={
              formData?.go_date
                ? new Date(formData.go_date).toISOString().split("T")[0]
                : ""
            }
            type="date"
            {...register("go_date", { required: true })}
          />

          <Input
            label="Title"
            value={formData?.title}
            placeholder="কর্মসূচীর নাম"
            {...register("title", { required: true })}
          />

          <Select
            options={f_years}
            value={formData?.f_year}
            label="Financial Year"
            labelKey="f_year"
            {...register("f_year", { required: true })}
          />

          <Select
            label="Season"
            options={seassions}
            labelKey="s_name"
            {...register("session", { required: true })}
          />

          <Input
            label="Total Beneficiaries"
            value={formData?.total_beneficiary}
            placeholder="0"
            {...register("total_beneficiary", { required: true })}
          />

          <Input
            label="Total Seed (MT)"
            disabled
            value={totalSeedAllotment ? totalSeedAllotment : "0"}
          />

          <Input label="Total Fertilizer (MT)" disabled value="1500" />

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
          <Input label="Fertilizer Allotment (TK)" disabled value="1500" />
          <Input label="Others Allotment (TK)" disabled value="1500" />
        </div>
      </section>
    </div>
  );
};

export default RehabilitationInfo;
