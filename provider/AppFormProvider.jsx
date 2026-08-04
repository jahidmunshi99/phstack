"use client";

import { FormProvider } from "react-hook-form";

const AppFormProvider = ({ children }) => {
  return <FormProvider>{children}</FormProvider>;
};

export default AppFormProvider;
