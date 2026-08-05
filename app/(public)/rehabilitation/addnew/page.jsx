"use client";

import { useContext } from "react";
import RehabilitationForm from "../../../../components/reehabilitation/forms/RehabilitationForm";
import { RehabilitationContext } from "../../../../provider/reehabilitationProvider.jsx";
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

const AddnewPage = () => {
  const data = useContext(RehabilitationContext);
  const { seassions, ingredients, f_years } = data;
  return (
    <>
      <RehabilitationForm initialData={{ seassions, ingredients, f_years }} />
    </>
  );
};

export default AddnewPage;
