"use client";
import { useParams, useRouter } from "next/navigation";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import RehabilitationForm from "../../../../../components/reehabilitation/forms/RehabilitationForm2.jsx";
import UpazilawiseBreakupTable from "../../../../../components/tables/UpazilawiseBreakupTable.js";
import { RehabilitationContext } from "../../../../../provider/reehabilitationProvider.jsx";

const EditPage = () => {
  const { data, rehabupazilawise } = useContext(RehabilitationContext);
  const params = useParams();
  const currentID = params.id.toString();
  const currentData = data.filter((item) => item._id === currentID);
  const currentUpazilaData = rehabupazilawise.filter(
    (item) => item.go_no === currentData[0].go_no,
  );
  const methods = useForm({ defaultValues: currentData[0] });

  const router = useRouter();

  const handleTestFromSubmit = (data) => {
    console.log(data);
    router.push("/rehabilitation");
  };

  // const handleSubmitForm = async (data) => {
  //   const allData = {
  //     ...data,
  //     createdAt: new Date().toISOString(),
  //     createdBy: "admin",
  //   };

  //   console.log(allData);

  //   try {
  //     const response = await fetch("/api/rehabilitations", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(allData),
  //     });

  //     if (response.ok) {
  //       router.push("/rehabilitation");
  //       console.log("API Response:", result);
  //     } else {
  //       throw new Error(result.message || "Failed to save");
  //     }
  //     console.log("Saved successfully:", result);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleTestFromSubmit)}>
        <RehabilitationForm data={currentData} />
        <div className="py-5">
          <UpazilawiseBreakupTable data={currentUpazilaData} />
        </div>
        <button
          className="cursor-pointer border  border-gray-300 px-3 py-1 bg-gray-300 rounded hover:bg-gray-600 hover:text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default EditPage;
