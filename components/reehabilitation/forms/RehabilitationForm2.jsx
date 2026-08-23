import TopDetailsLayout from "../TopDetailsLayout";
import PersonMaterials from "./PersonMaterials";
import RehabilitationInfo from "./RehabilitationInfo";

const RehabilitationForm = () => {
  return (
    <>
      <TopDetailsLayout />
      {/* <form onSubmit={methods.handleSubmit(handleSubmitForm)}> */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">
        {/* <RehabilitationInfo formData={formData} /> */}
        <RehabilitationInfo />
        {/* <PersonMaterials formData={formData?.ingredients_per_person} /> */}
        <PersonMaterials />
      </div>
    </>
  );
};

export default RehabilitationForm;
