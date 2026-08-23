"use client";
import { useParams, useRouter } from "next/navigation";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import RehabilitationForm from "../../../../../components/reehabilitation/forms/RehabilitationForm2.jsx";
import UpazilawiseBreakupTable from "../../../../../components/tables/UpazilawiseBreakupTable.js";
import { RehabilitationContext } from "../../../../../provider/reehabilitationProvider.jsx";

const EditPage = () => {
  const { data } = useContext(RehabilitationContext);
  const params = useParams();
  const currentID = params.id.toString();
  const currentData = data.filter((item) => item._id === currentID);
  const methods = useForm({ defaultValues: currentData[0] });

  const router = useRouter();

  const handleTestFromSubmit = (data) => {
    console.log(data);
    router.push("/rehabilitation");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleTestFromSubmit)}>
        <RehabilitationForm />
        <UpazilawiseBreakupTable />
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
