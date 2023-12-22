import { DndProvider, useDrag, useDrop } from "react-dnd";
import UseTasks from "../Hooks/UseTasks";
import { HTML5Backend } from "react-dnd-html5-backend";

const TaskItem = ({ task, index, moveTask }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "TASK",
    hover: (item) => {
      if (item.index !== index) {
        moveTask(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="space-y-2 border-gray-400 border rounded-md p-2"
    >
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
  );
};

const AllTasks = () => {
  const [tasks, setTasks] = UseTasks();

  const moveTask = (fromIndex, toIndex) => {
    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(fromIndex, 1);
    updatedTasks.splice(toIndex, 0, movedTask);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <section className="md:flex grid grid-cols-1 justify-between py-5 border rounded-md px-3 gap-5">
          <div>
            <h1 className="text-4xl font-medium">To-Do - ({tasks?.length})</h1>
            <div className="space-y-3 mt-3">
              {tasks?.map((task, index) => (
                <TaskItem key={task._id} task={task} index={index} moveTask={moveTask} />
              ))}
            </div>
          </div>
          <div className="">
            <h1 className="text-4xl font-medium">Ongoing:</h1>
            <div className="space-y-3 mt-3">
              {tasks?.map((task, index) => (
                <TaskItem key={task._id} task={task} index={index} moveTask={moveTask} />
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-medium">Completed</h1>
            <div className="space-y-3 mt-3">
              {tasks?.map((task, index) => (
                <TaskItem key={task._id} task={task} index={index} moveTask={moveTask} />
              ))}
            </div>
          </div>
        </section>
      </DndProvider>
    </div>
  );
};

export default AllTasks;
