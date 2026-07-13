import { useNavigate } from "react-router";
import { deletePost } from "../../fetchData/deletePost";
import { useAuth } from "../../hooks/useAuth";
import Icons from "../common/Icons";
import LoaderUi from "../common/LoaderUi";
import ProjectDuration from "../common/ProjectDuration";
import ConfrimationPopup from "./ConfirmationPopup";
import DetailsModal from "./DetailsModal";

const TaskTable = () => {
  const navigate = useNavigate();
  const {
    state,
    ShowModal,
    CloseModal,
    ShowPopup,
    ClosePopup,
    filteredTasks,
    EditTask,
    userInfo,
    activeTasks,
    deleteTask,
    ClearTask,
  } = useAuth();

  const handleViewTask = (note) => {
    ShowModal(note);
  };

  const handleEditTask = (item) => {
    EditTask(item);
    navigate(`/orders/edit/${item.id}`);
  };

  const onDelete = (item) => {
    deleteTask(item.id);
    ShowPopup();
  };

  const handleDeleteTask = async () => {
    const taskId = state.tasks;
    try {
      if (taskId) {
        await deletePost(taskId);
        ClearTask();
        ClosePopup();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // if (state.tasks) {
  //
  // }

  const delconfig = {
    title: "Are You Sure?",
    subtitle: "Your Changes will be lose if you don't save them.",
    buttontxt: "Yes, Delete It!",
    Logo: Icons.Warnning,
    LogoColor: "red",
  };

  return (
    <>
      {state.loading && <LoaderUi />}

      {state.showUi && (
        <DetailsModal noteMsg={state.message} onClose={CloseModal} />
      )}
      {state.ShowPopup && (
        <ConfrimationPopup
          promptconfig={delconfig}
          onClose={ClosePopup}
          onSave={handleDeleteTask}
        />
      )}
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
              {!activeTasks ? (
                <tr>
                  <div className="p-10">No Task Avialbe!</div>
                </tr>
              ) : (
                filteredTasks.map((item, index) => (
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
                          {<Icons.ArrowDown />}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900 text-center">
                      <ProjectDuration />
                    </td>
                    <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-900 text-center">
                      <span className="capitalize">{item.handle_by}</span>
                    </td>
                    <td className="px-6 py-1 whitespace-nowrap text-center text-sm font-medium">
                      <button
                        className="text-gray-600 hover:text-blue-900 px-2 py-1 inline-block cursor-pointer"
                        onClick={() => handleViewTask(item.note)}
                      >
                        <Icons.Eye className="text-[16px]" />
                      </button>
                      <button
                        className="text-blue-600 hover:text-blue-900 px-2 py-1 inline-block cursor-pointer"
                        onClick={() => handleEditTask(item)}
                      >
                        <Icons.Edit className="text-[15px] font-bold" />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-900 px-2 py-1 inline-block cursor-pointer"
                        onClick={() => onDelete(item)}
                      >
                        <Icons.Delete className="text-[18px]" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/** Footer Page Numbering */}
        <div className="mt-4 flex justify-between items-center text-sm text-gray-600 flex-wrap">
          <span>
            Showing {filteredTasks.length} to {filteredTasks.length} of 0
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
    </>
  );
};

export default TaskTable;
