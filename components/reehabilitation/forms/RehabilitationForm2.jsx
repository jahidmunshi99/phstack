"use client";
import { FormProvider, useForm } from "react-hook-form";
import TopDetailsLayout from "../TopDetailsLayout";
import PersonMaterials from "./PersonMaterials";
import RehabilitationInfo from "./RehabilitationInfo";
// const defaultData = {
//   createdAt: "",
//   createdBy: "",
//   f_year: "",
//   go_date: "",
//   go_no: "",
//   ingredients_per_person: [],
//   session: "kharif-2",
//   short_title: "",
//   title: "",
//   total_beneficiary: "",
//   __v: 0,
//   _id: "",
// };

const RehabilitationForm = ({ data }) => {
  // const [formData, setFormData] = useState(data?.[0] || defaultData);
  const initialData = data?.[0];
  const methods = useForm({ defaultValues: initialData });

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   let { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  const handleSubmitForm = () => {};

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmitForm)}>
        <TopDetailsLayout />
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">
          {/* <RehabilitationInfo formData={formData} /> */}
          <RehabilitationInfo />
          {/* <PersonMaterials formData={formData?.ingredients_per_person} /> */}
          <PersonMaterials />
        </div>
        {/* <button
          className="mt-20 p-2 bg-gray-800 text-white cursor-pointer"
          type="submit"
        >
          Save
        </button> */}
      </form>
    </FormProvider>
  );
};

export default RehabilitationForm;
