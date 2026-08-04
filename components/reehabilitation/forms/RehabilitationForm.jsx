"use client";

import { FormProvider, useForm } from "react-hook-form";
import TopDetailsLayout from "../TopDetailsLayout";
import PersonMaterials from "./PersonMaterials";
import RehabilitationInfo from "./RehabilitationInfo";

const RehabilitationForm = ({ initialData, onSubmit }) => {
  const methods = useForm({
    defaultValues: initialData,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <TopDetailsLayout />
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">
          <RehabilitationInfo />

          <PersonMaterials />
        </div>
        <button type="submit">Save</button>
      </form>
    </FormProvider>
  );
};

export default RehabilitationForm;
