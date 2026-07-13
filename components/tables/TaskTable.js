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
    <section className="rounded-lg bg-white p-4 shadow-md">
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase">
                ID
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold uppercase">
                Client Name
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold uppercase">
                Platform
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold uppercase">
                Budget
              </th>

              <th className="px-4 py-3 text-center text-xs font-semibold uppercase">
                Status
              </th>

              <th className="px-4 py-3 text-center text-xs font-semibold uppercase">
                Delivery Time
              </th>

              <th className="px-4 py-3 text-center text-xs font-semibold uppercase">
                Handle By
              </th>

              <th className="px-4 py-3 text-center text-xs font-semibold uppercase">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {tasks.map((task) => (
              <tr key={task.client_id} className="hover:bg-gray-50">
                <td className="px-4 py-3">{task.client_id}</td>

                <td className="px-4 py-3 font-medium">
                  {task.client_name}
                </td>

                <td className="px-4 py-3">{task.platform}</td>

                <td className="px-4 py-3">
                  ৳ {task.budget.toLocaleString()}
                </td>

                <td className="px-4 py-3 text-center">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusClass(
                      task.order_status
                    )}`}
                  >
                    {task.order_status}
                  </span>
                </td>

                <td className="px-4 py-3 text-center">
                  {task.delivery_time}
                </td>

                <td className="px-4 py-3 text-center">
                  {task.handle_by}
                </td>

                <td className="px-4 py-3">
                  <div className="flex justify-center gap-2">
                    <button className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600">
                      View
                    </button>

                    <button className="rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600">
                      Edit
                    </button>

                    <button className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between text-sm text-gray-600">
        <span>
          Showing 1 to {tasks.length} of {tasks.length} entries
        </span>

        <div className="mt-2 flex gap-2">
          <button className="rounded border px-4 py-2 hover:bg-gray-100">
            Previous
          </button>

          <button className="rounded border px-4 py-2 hover:bg-gray-100">
            Next
          </button>
        </div>
      </div>
    </section>
  );
}