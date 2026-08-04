"use client";

import { useContext } from "react";
import { RehabilitationContext } from "../../../../provider/reehabilitationProvider.jsx";

const Golayout = ({ children }) => {
  const data = useContext(RehabilitationContext);

  return <div item={data.rehabilitations}>{children}</div>;
};

export default Golayout;
