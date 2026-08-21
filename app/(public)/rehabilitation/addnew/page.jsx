"use client";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import RehabilitationForm from "../../../../components/reehabilitation/forms/RehabilitationForm2.jsx";
import { RehabilitationContext } from "../../../../provider/reehabilitationProvider.jsx";

const AddnewPage = () => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const { seassions, ingredients, f_years } = useContext(RehabilitationContext);

  const router = useRouter();

  const handleSubmitForm = async (data) => {
    const allData = {
      ...data,
      createdAt: new Date().toISOString(),
      createdBy: "admin",
    };

    console.log(allData);

    try {
      const response = await fetch("/api/rehabilitations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allData),
      });

      if (response.ok) {
        router.push("/rehabilitation");
        console.log("API Response:", result);
      } else {
        throw new Error(result.message || "Failed to save");
      }

      // const result = await response.json();

      // console.log("API Response:", result);

      // if (!response.ok) {
      //   throw new Error(result.message || "Failed to save");
      // }

      console.log("Saved successfully:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <RehabilitationForm handleSubmitForm={handleSubmitForm} />
        {/* <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">
          <RehabilitationInfo initialData={{ seassions, f_years }} />
          <PersonMaterials ingredients={ingredients} />
        </div> */}
      </form>
    </FormProvider>
  );
};

export default AddnewPage;
