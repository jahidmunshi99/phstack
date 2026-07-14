"use client";

const tasks = [
  {
    client_id: "01",
    client_name: "Jahid Munshi",
    platform: "Fiverr",
    budget: 5000,
    order_status: "active",
    delivery_time: "1 Day 12 Hours",
    handle_by: "Nayem",
  },
  {
    client_id: "02",
    client_name: "John Doe",
    platform: "Upwork",
    budget: 8500,
    order_status: "pending",
    delivery_time: "3 Days",
    handle_by: "Asish",
  },
  {
    client_id: "03",
    client_name: "Rahim",
    platform: "Freelancer",
    budget: 12000,
    order_status: "completed",
    delivery_time: "Completed",
    handle_by: "Hasan",
  },
];

const getStatusClass = (status) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-700";

    case "pending":
      return "bg-yellow-100 text-yellow-700";

    case "completed":
      return "bg-blue-100 text-blue-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function TaskTable() {
  return (
      <section className="bg-white shadow-md rounded-lg px-3 py-2">
        {/* <!-- Table --> */}
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                >
                  <div className="flex items-center space-x-1">
                    <span>ID</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                >
                  <div className="flex items-center space-x-1">
                    <span>Clients Name</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                  <div className="flex items-center space-x-1">
                    <span>Platform</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                >
                  <div className="flex items-center space-x-1">
                    <span>Value</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
                >
                  <div className="flex items-center justify-center space-x-1">
                    <span>Status</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
                >
                  <div className="flex items-center justify-center space-x-1">
                    <span>Delivery Date</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
                >
                  <div className="flex items-center justify-center space-x-1">
                    <span>Author</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
                >
                  <span>Actions</span>
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {tasks.map((item, index) => (
                  <tr key={index} className="hover:bg-[#D1D9FE]">
                    <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900 text-left">
                      {item.client_id}
                    </td>
                    <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                      <div className="font-medium capitalize">
                        {item.client_name}
                      </div>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 text-left">
                      <span className="capitalize">{item.platform}</span>
                    </td>
                    <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900 text-left">
                      ${item.budget}
                    </td>
                    <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900 text-center">
                      <div className="flex gap-2 items-center">
                        <span className="capitalize">{item.order_status}</span>
                        <span className="cursor-pointer ">
                          icon
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900 text-center">
                      2hrs 5min
                    </td>
                    <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900 text-center">
                      <span className="capitalize">nayem</span>
                    </td>
                    <td className="px-6 py-1 whitespace-nowrap text-center text-sm font-medium">
                      <button
                        className="text-gray-600 hover:text-blue-900 px-2 py-1 inline-block cursor-pointer"
                      >
                        <span className="text-[16px]">eye</span>
                      </button>
                      <button>
                        <span className="text-[15px] font-bold">edit</span>
                      </button>
                      <button
                        className="text-red-600 hover:text-red-900 px-2 py-1 inline-block cursor-pointer"
                      >
                        <span className="text-[18px]">delete</span>
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        {/** Footer Page Numbering */}
        <div className="mt-4 flex justify-between items-center text-sm text-gray-600 flex-wrap">
          <span>
            Showing 10 to 40 of 0
            entries
          </span>
          <div className="flex space-x-2 mt-2 sm:mt-0">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer">
              Previous
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer">
              Next
            </button>
          </div>
        </div>
      </section>
  );
}







