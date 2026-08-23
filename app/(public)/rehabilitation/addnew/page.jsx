"use client";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import RehabilitationForm from "../../../../components/reehabilitation/forms/RehabilitationForm2.jsx";

const AddnewPage = () => {
  const methods = useForm();
  const { handleSubmit } = methods;

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
      console.log("Saved successfully:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <RehabilitationForm />
        <button
          type="submit"
          className="bg-black px-4 rounded cursor-pointer py-1 text-white mt-4"
        >
          Save
        </button>
      </form>
    </FormProvider>
  );
};

export default AddnewPage;
