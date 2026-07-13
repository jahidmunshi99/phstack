import { useState } from "react";
import { useNavigate } from "react-router";
import Icons from "../common/Icons";
import ConfirmationPopup from "./ConfirmationPopup";
import { useAuth } from "../../hooks/useAuth";
import { createPost } from "../../fetchData/createPost";
import { updatePost } from "../../fetchData/updatePost";

const AddTaskModal = () => {
  const navigate = useNavigate();
  const { state, ShowPopup, ClosePopup, ClearTask, setGetItems, getItems } = useAuth();

  const [task, setTask] = useState(
    state.message || {
      client_id: "",
      client_name: "",
      book_title: "",
      author_name: "",
      client_email: "",
      client_social_link: "",
      country: "",
      order_status: "",
      platform: "",
      service_type: "",
      budget: "",
      note: [],
      delivery_date: "",
      delivery_file: [],
      is_order_complete: false,
      handle_by: "",
      createdBy: "",
      createdAt: new Date().toISOString(),
    },
  );

  // const isNew = !taskToUpdate;

  function handleChange(e) {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "delivery_file") {
      value = value.split(",");
    }

    setTask({
      ...task,
      [name]: value,
    });
  }

  const handleBack = () => {
    ClearTask()
    navigate("/orders");
  };

  const handleSave = async () => {
    try {
      if(state.message){
          await updatePost(state.message.id, task)

      }else{
        await createPost(task)
      }
      ClosePopup()
      navigate('/orders')
      setGetItems([...getItems, task])
    } catch (error) {
      console.log(error)
    }
  };

  const saveconfig = {
    title: "Save changes?",
    subtitle: "Your changes will be loss if you don't save them",
    buttontxt: "Save as it!",
    Logo: Icons.Save,
    LogoColor: "gray",
  };

  return (
    <>
      {state.ShowPopup && (
        <ConfirmationPopup promptconfig={saveconfig} onClose={ClosePopup} onSave={handleSave} saveTask={task} />
      )}
      <div className="flex gap-4">
        <button
          className="bg-gray-600 text-white px-3 py-1 rounded-md cursor-pointer mt-4 shadow-md hover:bg-black hover:text-white transition delay-50 duration-100 ease-in-out flex justify-between items-center gap-1"
          onClick={handleBack}
        >
          <Icons.Back />
          <span>Back</span>
        </button>
        <button
          className="bg-gray-600 text-white px-3 py-1 rounded-md cursor-pointer mt-4 shadow-md hover:bg-black hover:text-white transition delay-50 duration-100 ease-in-out flex justify-between items-center gap-1"
          onClick={()=>{ShowPopup()}}
        >
          <Icons.Save />
          <span>{state.message ? "Update Task" : "Save"}</span>
        </button>
      </div>

      <div className="flex items-start justify-center  overflow-y-auto">
        <htmlFor className="relative mx-auto my-6 w-full border- rounded-xl bg-gray-50 p-6 md:p-9 lg:my-5 lg:p-10">
          <h2 className="mb-4 text-center text-xl font-bold md:text-2xl lg:mb-6 lg:text-[28px]">
            {!state.message ? "Add New Task" : "Update Task"}
          </h2>

          {/* inputs */}
          <div className="space-y-6 lg:space-y-10">
            {/* Row 1 */}
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="lg:w-[20%] md:w-full space-y-2">
                <label>Customer ID</label>
                <input
                  type="text"
                  name="client_id"
                  onChange={handleChange}
                  value={task.client_id}
                  className="w-full rounded-md bg-white border border-gray-400 px-3 py-2"
                />
              </div>

              <div className="lg:w-[50%] md:w-full space-y-2">
                <label>Client's Name</label>
                <input
                  type="text"
                  name="client_name"
                  onChange={handleChange}
                  value={task.client_name}
                  className="w-full rounded-md bg-white border border-gray-400 px-3 py-2"
                />
              </div>
              <div className="lg:w-[30%] md:w-full space-y-2">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  onChange={handleChange}
                  value={task.country}
                  className="w-full rounded-md bg-white border border-gray-400 px-3 py-2"
                />
              </div>
            </div>
            {/* Row 3 */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="space-y-2">
                <label>Platform</label>
                <select
                  name="platform"
                  value={task.platform}
                  onChange={handleChange}
                  className="w-full rounded-md bg-white border border-gray-400 px-3 py-2.5"
                >
                  <option value="fiverr">Fiverr</option>
                  <option value="upwork">Upwork</option>
                  <option value="direct">Direct</option>
                </select>
              </div>

              <div className="space-y-2">
                <label>Service Type</label>
                <select
                  name="service_type"
                  value={task.service_type}
                  onChange={handleChange}
                  className="w-full rounded-md bg-white border border-gray-400 px-3 py-2.5"
                >
                  <option value="book formatting">Book Formatting</option>
                  <option value="cover design">Cover Design</option>
                  <option value="web development">Web Development</option>
                </select>
              </div>
              <div className="space-y-2">
                <label>Budget</label>
                <input
                  name="budget"
                  onChange={handleChange}
                  value={task.budget}
                  className="w-full rounded-md bg-white border border-gray-400 px-3 py-2.5"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="space-y-2">
                <label>Order Status</label>
                <select
                  name="order_status"
                  value={task.order_status}
                  onChange={handleChange}
                  className="w-full rounded-md bg-white border border-gray-400 px-3 py-2.5"
                >
                  <option value="new">Active</option>
                  <option value="revision">Revision</option>
                  <option value="delivered">Delivered</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              <div className="space-y-2">
                <label>Delivery Date</label>
                <input
                  type="date"
                  name="delivery_date"
                  onChange={handleChange}
                  value={task.delivery_date}
                  className="w-full rounded-md bg-white border border-gray-400 px-3 py-2"
                />
              </div>
              <div className="space-y-2">
                <label>Handle By</label>
                <select
                  name="handle_by"
                  value={task.handle_by}
                  onChange={handleChange}
                  className="w-full rounded-md bg-white border border-gray-400 px-3 py-2.5"
                >
                  <option value="nayem">Nayem</option>
                  <option value="jahid munshi">Jahid Munshi</option>
                  <option value="faiaz ">Faiaz</option>
                </select>
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-1 gap-5">
              <div className="space-y-2">
                <label>Delivery File</label>
                <textarea
                  name="delivery_file"
                  onChange={handleChange}
                  value={task.delivery_file}
                  className="w-full rounded-md bg-white border border-gray-400 max-h-[40px] px-3 "
                />
              </div>
            </div>

            {/** Book Information */}
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="w-full space-y-2">
                <label>Book Title</label>
                <input
                  type="text"
                  name="book_title"
                  onChange={handleChange}
                  value={task.book_title}
                  className="w-full rounded-md bg-white border border-gray-400 px-3 py-2"
                />
              </div>

              <div className="w-full space-y-2">
                <label>Author Name</label>
                <input
                  type="text"
                  name="author_name"
                  onChange={handleChange}
                  value={task.author_name}
                  className="w-full rounded-md bg-white border border-gray-400 px-3 py-2"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="w-full space-y-2">
                <label>Email</label>
                <input
                  type="email"
                  name="client_email"
                  onChange={handleChange}
                  value={task.client_email}
                  className="w-full rounded-md bg-white border border-gray-400 px-3 py-2"
                />
              </div>

              <div className="w-full space-y-2">
                <label>Social Link</label>
                <input
                  type="text"
                  name="client_social_link"
                  onChange={handleChange}
                  value={task.client_social_link}
                  className="w-full rounded-md bg-white border border-gray-400 px-3 py-2"
                />
              </div>
            </div>

            {/* Note */}
            <div className="space-y-2">
              <label>Note</label>
              <textarea
                name="note"
                value={task.note}
                onChange={handleChange}
                className="min-h-[80px] w-full rounded-md bg-white border border-gray-400 px-3 py-2"
              />
            </div>
          </div>
        </htmlFor>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-gray-600 text-white px-3 py-1 rounded-md cursor-pointer mt-1 shadow-md hover:bg-black hover:text-white transition delay-50 duration-100 ease-in-out flex justify-between items-center gap-1"
          onClick={()=>ShowPopup()}
        >
          <Icons.Save />          
          <span>{state.message ? "Update Task" : "Save"}</span>
        </button>
      </div>
    </>
  );
};

export default AddTaskModal;
