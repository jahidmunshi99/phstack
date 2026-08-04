// "use client";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import mongoDB from "../../lib/mongodb.js";

const Table = async () => {
  const data = await mongoDB();
  return (
    <>
      {/* <!-- Table --> */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex items-center space-x-1">
                  <span>Sl</span>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex items-center space-x-1">
                  <span>Name</span>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex items-center space-x-1">
                  <span>GO No</span>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex items-center space-x-1">
                  <span>Go Date</span>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className="flex items-center space-x-1">
                  <span>F. Year</span>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <span>Actions</span>
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  {index + 1}
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                  <div className="font-medium">{item?.title}</div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-600 text-left">
                  <span>{item?.go_no}</span>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left capitalize">
                  {item?.go_date}
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 text-left">
                  2025-26
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-center text-sm font-medium">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-900 px-2 py-1 inline-block"
                  >
                    <Link href={`/rehabilitation/${item?.go_no}`}>
                      <FaEye className="text-[16px]" />
                    </Link>
                  </a>
                  <Link
                    href={`/rehabilitation/${item?.go_no}/edit`}
                    className="text-green-600 hover:text-green-900 px-2 py-1 inline-block"
                  >
                    <FaPenToSquare className="text-[15px]" />
                  </Link>
                  <a
                    href="#"
                    className="text-red-600 hover:text-red-900 px-2 py-1 inline-block"
                  >
                    <MdDelete className="text-[18px]" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between items-center text-sm text-gray-600 flex-wrap">
        <span>Showing 0 to 0 of 0 entries</span>
        <div className="flex space-x-2 mt-2 sm:mt-0">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer">
            Previous
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Table;
