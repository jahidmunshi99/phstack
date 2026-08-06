"use client";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import PersonMaterials from "../../../../components/reehabilitation/forms/PersonMaterials.js";
import RehabilitationInfo from "../../../../components/reehabilitation/forms/RehabilitationInfo.js";
import TopDetailsLayout from "../../../../components/reehabilitation/TopDetailsLayout.js";
import { RehabilitationContext } from "../../../../provider/reehabilitationProvider.jsx";

const AddnewPage = () => {
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const infoData = useContext(RehabilitationContext);
  const { seassions, ingredients, f_years } = infoData;

  const handleSubmitForm = (data) => {
    const allData = {
      ...data,
      createdAt: new Date().toISOString(),
      createdBy: "admin",
    };
    console.log(allData);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <TopDetailsLayout />
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">
          <RehabilitationInfo initialData={{ seassions, f_years }} />
          <PersonMaterials ingredients={ingredients} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default AddnewPage;
