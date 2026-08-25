"use client";
import { useParams } from "next/navigation.js";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import RehabilitationForm from "../../../../../components/reehabilitation/forms/RehabilitationForm2.jsx";
import UpazilawiseBreakupTable from "../../../../../components/tables/UpazilawiseBreakupTable.js";
import { RehabilitationContext } from "../../../../../provider/reehabilitationProvider.jsx";

const EditPage = () => {
  // fetch data from db and passing data on FormProvider using methods
  const { data } = useContext(RehabilitationContext);
  const params = useParams();
  const currentID = params.id.toString();
  const currentData = data.filter((item) => item._id === currentID);
  const methods = useForm({ defaultValues: currentData[0] });

  return (
    <FormProvider {...methods}>
      {/* <form onSubmit={methods.handleSubmit(handleTestFromSubmit)}> */}
      <RehabilitationForm />
      <UpazilawiseBreakupTable />
      <button
        className="cursor-pointer border  border-gray-300 px-3 py-1 bg-gray-300 rounded hover:bg-gray-600 hover:text-white"
        type="submit"
      >
        Submit
      </button>
      {/* </form> */}
    </FormProvider>
  );
};

export default EditPage;
