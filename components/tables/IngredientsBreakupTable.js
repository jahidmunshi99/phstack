"use client";

export const IngredientsBreakupTable = ({ items }) => {
  //   const {} = items;
  const totalAllotments = items.reduce((total, item) => total + item.price, 0);

  return (
    <table className="w-full border-collapse text-[0.82rem]">
      {/* <!-- Header --> */}
      <thead className="bg-slate-100">
        <tr>
          <th className="border border-slate-300 px-4 py-3 text-center font-bold">
            ক্র.নং
          </th>

          <th className="border border-slate-300 px-4 py-3 text-center font-bold">
            উপকরণ
          </th>

          <th className="border border-slate-300 px-4 py-3 text-center font-bold">
            পরিমাণ
          </th>
          <th className="border border-slate-300 px-4 py-3 text-center font-bold">
            উপমোট (৳)
          </th>
        </tr>
      </thead>
      {/* <!-- Body --> */}
      <tbody>
        {items.map((item, index) => {
          return (
            <tr key={index} className="transition hover:bg-cyan-50">
              <td className="border border-slate-300 px-4 py-1 text-center">
                {index + 1}
              </td>

              <td className="border border-slate-300 px-4 py-1 font-medium capitalize">
                {item?.name}
              </td>

              <td className="border border-slate-300 px-4 py-1 text-center">
                {item?.quantity}
              </td>

              <td className="border border-slate-300 bg-cyan-50 px-4 py-1 text-center font-bold text-cyan-700">
                {item?.price}
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot className="bg-slate-100 font-bold">
        <tr>
          {/* <!-- Total Label --> */}
          <td
            colspan="2"
            className="border border-slate-300 px-4 py-1 text-right"
          >
            মোট
          </td>

          {/* <!-- Farmers --> */}

          <td className="border border-slate-300 px-4 py-1 text-center">-</td>

          {/* <!-- Grand Total --> */}

          <td className="border border-slate-300 bg-cyan-50 px-4 py-1 text-center text-cyan-700">
            {totalAllotments}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
