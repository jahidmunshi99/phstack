import { IoPrintOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useActionReducer } from "../../hooks/useActionReducer";
import { useAuth } from "../../hooks/useAuth";

const TaskTableActionbar = () => {
  const navigate = useNavigate();
  const { itemFilter } = useAuth();

  const {
    ShowModal,
    IsTaskError,
  } = useActionReducer();

  const handleAddTask = () => {
    ShowModal();
    try {
      navigate("/orders/addnew");
    } catch (error) {
      IsTaskError(error);
    }
  };

  const handleOrderStutasFilter = (e) => {
    const value = e.target.value;
    itemFilter(value);
    // alert(value);
  };

  const platformCategory = ["fiverr", "upword", "direct", "social"]
  const years = ["2026", "2025", "2024", "2023", "2022", "2021", "2020"]
  const platForm = platformCategory.map((item)=> {return item})





  return (
    <section className="bg-white px-4 py-2 mb-1 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <div className="text-sm text-slate-600">
            <select className="text-sm text-slate-600 border border-gray-300 px-2 py-1 rounded">
              {years.map((year, index)=> 
              <option key={index} value={year}>{year} </option>
              )}
              {/* <option value="">Year</option>
              <option value="">2025-26</option>
              <option value="">2024-25</option>
              <option value="">2023-24</option>
              <option value="">2022-23</option>
              <option value="">2021-22</option> */}
            </select>
          </div>
          <div className="text-sm text-slate-600">
            <select
              className="text-sm text-slate-600 border border-gray-300 px-2 py-1 rounded capitalize"
              onChange={handleOrderStutasFilter}
            >
              <option value="new">Active</option>
              <option value="revision">Revision</option>
              <option value="delivered">Delivered</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="text-sm text-slate-600">
            <select className="text-sm capitalize text-slate-600 border border-gray-300 px-2 py-1 rounded">
              {platForm.map((platform, index)=>
              <option key={index} value={platform}>{platform}</option>
              )}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center space-x-2 text-sm">
            <span>Search:</span>
            <input
              type="text"
              className="border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-slate-200 cursor-pointer"
            onClick={() => handleAddTask()}
          >
            + Add New
          </button>
          <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-slate-200 cursor-pointer">
            Export CSV
          </button>
          <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-slate-200 cursor-pointer">
            <IoPrintOutline className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TaskTableActionbar;
