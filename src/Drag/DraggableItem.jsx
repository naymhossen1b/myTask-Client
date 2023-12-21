import { useDrag } from 'react-dnd';

const DraggableItem = ({ id, content }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'ITEM',
    item: { id, content },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="bg-blue-200 p-4 m-2 cursor-pointer"
    >
      {content}
    </div>
  );
};

export default DraggableItem;
