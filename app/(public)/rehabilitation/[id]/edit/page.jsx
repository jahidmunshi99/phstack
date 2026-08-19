"use client";
import { useParams, useRouter } from "next/navigation";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import RehabilitationForm from "../../../../../components/reehabilitation/forms/RehabilitationForm2.jsx";
import UpazilawiseBreakupTable from "../../../../../components/tables/UpazilawiseBreakupTable.js";
import { RehabilitationContext } from "../../../../../provider/reehabilitationProvider.jsx";

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

const EditPage = () => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const { data, rehabupazilawise } = useContext(RehabilitationContext);
  const params = useParams();
  const currentID = params.id.toString();
  const currentData = data.filter((item) => item._id === currentID);

  const { session, ingredients_per_person, f_years } = currentData[0];

  console.log(currentData);

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
      <RehabilitationForm
        data={currentData}
        handleSubmitForm={handleSubmitForm}
      />
      <div className="py-5">
        <UpazilawiseBreakupTable />
      </div>
      <button
        className="cursor-pointer border border-gray-300 px-3 py-1 bg-gray-300 rounded hover:bg-gray-600"
        type="submit"
      >
        Submit
      </button>
    </FormProvider>
  );
};

export default EditPage;
