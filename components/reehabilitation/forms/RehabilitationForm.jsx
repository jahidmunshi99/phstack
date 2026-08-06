"use client";

import { FormProvider, useForm } from "react-hook-form";
import TopDetailsLayout from "../TopDetailsLayout";
import PersonMaterials from "./PersonMaterials";
import RehabilitationInfo from "./RehabilitationInfo";

const RehabilitationForm = ({ initialData, handleSubmitForm }) => {
  const methods = useForm();
  const { seassions, ingredients, f_years } = initialData;
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmitForm)}>
        <TopDetailsLayout />
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">
          <RehabilitationInfo initialData={{ seassions, f_years }} />
          <PersonMaterials ingredients={ingredients} />
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
