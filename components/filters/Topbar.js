// import Icon from "../utils/Icons_ulits";
import Button from "@/components/common/Button.jsx";
import Link from "next/link";

const filterData = {
  divisions: [
    { id: 1, name: "Dhaka" },
    { id: 2, name: "Barisal" },
  ],
  districts: [
    { id: 1, name: "Dhaka" },
    { id: 2, name: "Barisal" },
  ],
  upozilas: [
    { id: 1, name: "Dhaka Sadar" },
    { id: 2, name: "Bakerganj" },
  ],
  sessions: [
    { id: 1, name: "Kharip-1" },
    { id: 2, name: "Rabi" },
  ],
};

const selectClass =
  "text-sm text-slate-600 border border-gray-300 px-3 py-2 rounded capitalize";

const SelectField = ({ placeholder, options }) => (
  <select className={selectClass} defaultValue="">
    <option value="" disabled>
      {placeholder}
    </option>

    {options.map((option) => (
      <option key={option.id} value={option.id}>
        {option.name}
      </option>
    ))}
  </select>
);

const Topbar = () => {
  return (
    <section className="bg-white rounded shadow-sm p-2 mb-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <SelectField placeholder="Division" options={filterData.divisions} />

          <SelectField placeholder="District" options={filterData.districts} />

          <SelectField placeholder="Upozila" options={filterData.upozilas} />

          <SelectField placeholder="Season" options={filterData.sessions} />
        </div>

        <div className="flex items-center gap-2">
          <Link href="/rehabilitation/addnew">
            <Button>Add New</Button>
          </Link>
          <Button>Export CSV</Button>
          <Button>Print</Button>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
