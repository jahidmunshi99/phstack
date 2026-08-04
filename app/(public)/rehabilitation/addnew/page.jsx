"use client";

import RehabilitationForm from "../../../../components/reehabilitation/forms/RehabilitationForm";

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
  return (
    <>
      <RehabilitationForm />
    </>
  );
};

export default AddnewPage;
