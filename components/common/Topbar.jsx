import { useState } from "react";

const Topbar = () => {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpozila, setSelectedUpozila] = useState("");
  const [selectedSession, setSelectedSession] = useState("");

  const divisions = ["Dhaka", "Gajipur"];
  const districts = ["Patuakhali", "Barisal"];
  const upozila = ["Patuakhali Sadar", "Pirojpur"];
  const session = ["2022-24"];

  console.log(session);

  return (
    <section className="bg-white px-4 py-2 rounded-lg shadow-sm mb-4">
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-600">
          <select
            className="text-sm text-slate-600 border border-gray-300 px-2 py-1 rounded"
            onChange={(e) => setSelectedDivision(e.target.value)}
          >
            <option value="">বিভাগ</option>
            {divisions.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name_bn}
              </option>
            ))}
          </select>
          {selectedDivision && (
            <select
              className="text-sm text-slate-600 border border-gray-300 px-2 py-1 rounded mx-3"
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              <option value="">জেলা</option>
              {districts.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name_bn}
                </option>
              ))}
            </select>
          )}

          {selectedDistrict && (
            <select
              className="text-sm text-slate-600 border border-gray-300 px-2 py-1 rounded"
              onChange={(e) => setSelectedUpozila(e.target.value)}
            >
              <option value="">উপজেলা</option>
              {upozila.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name_bn}
                </option>
              ))}
            </select>
          )}
          <select className="text-sm text-slate-600 border border-gray-300 px-2 py-1 mx-2 rounded">
            <option value="">মৌসুম</option>
            {session.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-slate-50 cursor-pointer">
            Export CSV
          </button>
          <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-slate-50 cursor-pointer">
            {/* <IoPrintOutline className="text-xl" /> */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
