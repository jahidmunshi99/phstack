"use client";
import Topbar from "@/components/reehabilitation/Topbar.js";
import Table from "@/components/tables/Table.js";
import { RehabilitationContext } from "@/provider/reehabilitationProvider";
import { useContext } from "react";

const RehabilitationPage = () => {
  const data = useContext(RehabilitationContext);
  console.log(data);
  return (
    <>
      <Topbar />
      <Table data={data.data} />
    </>
  );
};

export default RehabilitationPage;
