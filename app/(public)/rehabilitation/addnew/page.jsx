"use client";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import TopDetailsLayout from "../../../../components/reehabilitation/TopDetailsLayout.js";
import PersonMaterials from "../../../../components/reehabilitation/forms/PersonMaterials.js";
import RehabilitationInfo from "../../../../components/reehabilitation/forms/RehabilitationInfo.js";
import { RehabilitationContext } from "../../../../provider/reehabilitationProvider.jsx";
const AddnewPage = () => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const { seassions, ingredients, f_years } = useContext(RehabilitationContext);
  console.log(seassions);
  // const { seassions, ingredients, f_years } = data;
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
  const test = async () => {
    const response = await fetch("/api/rehabilitations");
    const data = await response.json();
    console.log(data.data);
  };
  test();

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
