"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import TopDetailsLayout from "../../../../components/reehabilitation/TopDetailsLayout";
import PersonMaterials from "../../../../components/reehabilitation/forms/PersonMaterials";
import RehabilitationInfo from "../../../../components/reehabilitation/forms/RehabilitationInfo";

const values = [
  {
    id: 1,
    name: "mop",
  },
  {
    id: 2,
    name: "dap",
  },
  {
    id: 3,
    name: "uria",
  },
  {
    id: 4,
    name: "seeds",
  },
  {
    id: 5,
    name: "plants",
  },
  {
    id: 6,
    name: "compost",
  },
  {
    id: 7,
    name: "travel",
  },
  {
    id: 8,
    name: "others",
  },
];

const materials = [
  {
    id: 1,
    name: "mop",
    quantity: 10,
    budget: 100,
  },
];

const seassions = [
  { name: "Robi" },
  { name: "Kharif-1" },
  { name: "Kharif-2" },
];

const AddnewPage = () => {
  const [selectedMaterial, setSelectedMaterial] = useState([0]);
  const { register, handleSubmit, watch } = useForm();
  const handleAddMaterial = (item) => {
    // Logic to add a new material entry
    setSelectedMaterial([...selectedMaterial, item]); // Reset to the first material after adding
  };

  const handleFormSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  const handleDeleteMaterial = (index) => {
    const updatedMaterials = [...selectedMaterial];
    updatedMaterials.splice(index, 1);
    setSelectedMaterial(updatedMaterials);
  };
  return (
    <>
      <TopDetailsLayout />
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">
          {/* Left Side */}
          <RehabilitationInfo register={register} seassions={seassions} />

          {/* Right Side */}
          <PersonMaterials
            selectedMaterial={selectedMaterial}
            register={register}
            seassions={seassions}
            values={values}
            handleAddMaterial={handleAddMaterial}
            handleDeleteMaterial={handleDeleteMaterial}
          />
        </div>
        {/* test button */}
        <input
          type="submit"
          value="Submit"
          className="mt-5 rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
        />
      </form>
    </>
  );
};

export default AddnewPage;
