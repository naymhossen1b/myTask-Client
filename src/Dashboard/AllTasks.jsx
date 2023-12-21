import { DndProvider } from "react-dnd";
import DraggableItem from "../Drag/DraggableItem";
import DroppableContainer from "../Drag/DroppableContainer";
import UseTasks from "../Hooks/UseTasks";
import { HTML5Backend } from 'react-dnd-html5-backend';

const AllTasks = () => {
  const [tasks] = UseTasks();

  //   eventLogger = (e: MouseEvent, data: Object) => {
  //     console.log('Event: ', e);
  //     console.log('Data: ', data);
  //   };

  return (
    <div>
      <section className="flex items-center justify-between px-3 py-5">
        <div className="border-r-2 border-gray-500 ">
          <h2 className="uppercase text-3xl font-medium">to-do</h2>
          <div>
          </div>
        </div>
        <div className="border-r-2 border-gray-500"></div>
        <div>
          <h2 className="uppercase text-3xl font-medium">to-do</h2>
        </div>
        <div>
          <h2 className="uppercase text-3xl font-medium">to-do</h2>
        </div>
      </section>
      <DndProvider backend={HTML5Backend}>
      <div className="flex justify-center mt-8">
        <DraggableItem id="1" content="Item 1" />
        <DraggableItem id="2" content="Item 2" />
        <DraggableItem id="3" content="Item 3" />
        <DroppableContainer />
      </div>
    </DndProvider>
    </div>
  );
};

export default AllTasks;
