import { DatePicker } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SecureAxios from "../Hooks/SecureAxios";
import toast, { Toaster } from "react-hot-toast";
import AllTasks from "./AllTasks";
import UseTasks from "../Hooks/UseTasks";

const TaskForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  const { register, handleSubmit } = useForm();
  const [, refetch] = UseTasks();

  const onSubmit = (data) => {
    const taskInfo = {
      title: data.title,
      priority: data.priority,
      descriptions: data.descriptions,
      startDate,
    };

    SecureAxios.post("/tasks", taskInfo)
      .then(() => {
        toast.success("Task Added!");
        refetch();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div>
      <div>
        <h2 className="text-4xl font-medium py-2 uppercase underline">Today:</h2>
        <div className="bg-white rounded-md px-3 py-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                className="border-transparent focus:outline-none focus:border-gray-200 border-b-gray-200 w-full p-2"
                {...register("title", { required: true })}
                placeholder="Title"
                name="title"
              />
            </div>
            <div>
              <textarea
                {...register("descriptions", { required: true })}
                className="border-b-2 border-transparent focus:outline-none focus:border-gray-200 border-b-gray-200 w-full p-2"
                name="descriptions"
                id=""
                cols="2"
                rows="2"
                placeholder="Descriptions"
              ></textarea>
            </div>
            <div className="flex items-center mt-3 gap-3">
              <div className="border rounded-md p-1 bg-white">
                <label>
                  <select className="" {...register("priority", { required: true })}>
                    <option value="low">Priority</option>
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                  </select>
                </label>
              </div>

              <div>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-orange-400 hover:bg-green-600 rounded-md text-white px-2 py-1"
                >
                  Add Task
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <AllTasks />
      <Toaster />
    </div>
  );
};

export default TaskForm;
