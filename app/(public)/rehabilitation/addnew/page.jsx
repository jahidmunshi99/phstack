"use client";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import TopDetailsLayout from "../../../../components/reehabilitation/TopDetailsLayout.js";
import PersonMaterials from "../../../../components/reehabilitation/forms/PersonMaterials.js";
import RehabilitationInfo from "../../../../components/reehabilitation/forms/RehabilitationInfo.js";
import { RehabilitationContext } from "../../../../provider/reehabilitationProvider.jsx";

const AddnewPage = () => {
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const infoData = useContext(RehabilitationContext);
  const { seassions, ingredients, f_years } = infoData;

  const handleSubmitForm = async (data) => {
    const allData = {
      ...data,
      createdAt: new Date().toISOString(),
      createdBy: "admin",
    };

    try {
      const response = await fetch("app/api/rehabilitations/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      console.log("Saved Successfully:", result);

      // Optional: reset the form
      methods.reset();
    } catch (error) {
      console.error(error);
    }
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
