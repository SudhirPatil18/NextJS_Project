import useStore from '../store';

const Grid = () => {
  const cells = useStore((state) => state.cells);
  const updateCell = useStore((state) => state.updateCell);

  return (
    <div className="grid grid-cols-20 gap-1 p-4">
      {cells.map((cell, index) => (
        <input
          key={index}
          value={cell.value}
          onChange={(e) => updateCell(index, { value: e.target.value })}
          className="border border-gray-300 p-2 text-center"
        />
      ))}
    </div>
  );
};

export default Grid;
