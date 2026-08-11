"use client";
import Topbar from "@/components/reehabilitation/Topbar.js";
import Table from "@/components/tables/Table.js";
import { RehabilitationContext } from "@/provider/reehabilitationProvider";
import { Suspense, useContext } from "react";
import RehabilitationLoading from "../../(public)/rehabilitation/loading.jsx";

const RehabilitationPage = () => {
  const data = useContext(RehabilitationContext);
  console.log(data);
  return (
    <>
      <Topbar />
      <Suspense fallback={<RehabilitationLoading />}>
        <Table data={data?.data} />
      </Suspense>
    </>
  );
};

export default RehabilitationPage;
