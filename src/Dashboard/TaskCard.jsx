const TaskCard = ({ task }) => {
  const { title, descriptions, startDate, priority } = task || {};
  return (
    <div className="space-y-2 border-gray-400 border rounded-md p-2">
      <h4 className="text-xl font-medium">{title}</h4>
      <p className="font-medium">{descriptions}</p>
      <div>
        <p className="text-sm">
          <span className="font-medium underline">Deadlines </span>: {startDate}
        </p>
        <p className="text-green-500 uppercase">
          <span className="underline font-medium text-neutral">Priority </span>
          {priority}
        </p>
      </div>
    </div>
  );
};

export default TaskCard;


/* 
import UseTasks from "../Hooks/UseTasks";

const AllTasks = () => {
  const [tasks] = UseTasks();

  return (
    <div>
      <section className="flex justify-between py-5 border rounded-md px-3">
        <div>
          <h1 className="text-4xl font-medium">To-Do:</h1>
          <div className="space-y-3">
            {tasks?.map((task) => (
              <div key={task._id} className="space-y-2 border-gray-400 border rounded-md p-2">
                <h4 className="text-xl font-medium">{task?.title}</h4>
                <p className="font-medium">{task?.descriptions}</p>
                <div>
                  <p className="text-sm">
                    <span className="font-medium underline">Deadlines </span>: {task?.startDate}
                  </p>
                  <p className="text-green-500 uppercase">
                    <span className="underline font-medium text-neutral">Priority </span>
                    {task?.priority}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <h1 className="text-4xl font-medium">Ongoing:</h1>
        </div>
        <div>
          <h1 className="text-4xl font-medium">Completed</h1>
        </div>
      </section>
    </div>
  );
};

export default AllTasks;

*/
