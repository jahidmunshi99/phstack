"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import TopDetailsLayout from "../TopDetailsLayout";
import PersonMaterials from "./PersonMaterials";
import RehabilitationInfo from "./RehabilitationInfo";

const seassions = [
  {
    session: "robi",
  },
];

const f_years = [
  {
    f_year: "2025-26",
  },
];

const RehabilitationForm = ({ data, handleSubmitForm }) => {
  const [isEdit, seIsEdit] = useState(
    data || {
      createdAt: "2026-08-11T09:41:24.330Z",
      createdBy: "admin",
      f_year: "",
      go_date: "",
      go_no: "",
      ingredients_per_person: [
        {
          name: "seeds",
          quantity: 0.3,
          price: 1210,
          _id: "6a7afa1a2f8ea94ef4bb840a",
        },

        {
          name: "mop",
          quantity: 15,
          price: 0,
          _id: "6a7afa1a2f8ea94ef4bb840b",
        },

        {
          name: "dap",
          quantity: 15,
          price: 285,
          _id: "6a7afa1a2f8ea94ef4bb840c",
        },

        {
          name: "travel",
          quantity: 0,
          price: 45.45,
          _id: "6a7afa1a2f8ea94ef4bb840d",
        },
        {
          name: "others",
          quantity: 0,
          price: 30.3,
          _id: "6a7afa1a2f8ea94ef4bb840e",
        },
      ],
      session: "kharif-2",
      short_title: "বৃক্ষ রোপণ প্রণোদনা কর্মসূচী",
      title:
        "২০২৫-২৬ অর্থবছরে কৃষি পুনর্বাসন সহায়তা খাতে বৃক্ষরোপণ কর্মসূচীর আওতায় গাছ/বৃক্ষের প্রণোদনা কর্মসূচী",
      total_beneficiary: 4895,
      __v: 0,
      _id: "6a7aee45b1cc71775a7c28c5",
    },
  );

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmitForm)}>
        <TopDetailsLayout />
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">
          <RehabilitationInfo initialData={{ seassions, f_years }} />
          <PersonMaterials ingredients={data} />
        </div>
        <button
          className="mt-20 p-2 bg-gray-800 text-white cursor-pointer"
          type="submit"
        >
          Save
        </button>
      </form>
    </FormProvider>
  );
};

export default RehabilitationForm;
