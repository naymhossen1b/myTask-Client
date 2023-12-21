import { useState } from 'react';
import { useDrop } from 'react-dnd';

const DroppableContainer = () => {
  const [items, setItems] = useState([]);

  const [, drop] = useDrop({
    accept: 'ITEM',
    drop: (item) => {
      setItems((prevItems) => [...prevItems, item]);
    },
  });

  return (
    <div ref={drop} className="bg-gray-300 p-6">
      <h2 className="text-xl font-bold mb-4">Droppable Container</h2>
      <div className="flex">
        {items.map((item) => (
          <div key={item._id} className="bg-green-200 p-4 m-2">
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DroppableContainer;
