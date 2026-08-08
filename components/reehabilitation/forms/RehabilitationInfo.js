"use client";

import { useFormContext } from "react-hook-form";
import Input from "./Input";
import Select from "./Select";

const RehabilitationInfo = ({ initialData }) => {
  const { seassions, f_years } = initialData;
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
            placeholder="0000-000-000-000-00"
            {...register("go_no", { required: true })}
          />

          <Input
            label="GO Date"
            type="date"
            {...register("go_date", { required: true })}
          />

          <Input
            label="Title"
            placeholder="লেবু চারা প্রণোদনা"
            {...register("title", { required: true })}
          />

          <Select
            options={f_years}
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
            placeholder="0"
            {...register("total_beneficiary", { required: true })}
          />

          <Input label="Total Seed (MT)" disabled value="1500" />

          <Input label="Total Fertilizer (MT)" disabled value="1500" />

          <Input label="Total Allotment (TK)" disabled value="1500" />
          <Input label="Seed Allotment (TK)" disabled value="1500" />
          <Input label="Fertilizer Allotment (TK)" disabled value="1500" />
          <Input label="Others Allotment (TK)" disabled value="1500" />
        </div>
      </section>
    </div>
  );
};

export default RehabilitationInfo;
