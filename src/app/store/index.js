import create from 'zustand';

const useStore = create((set) => ({
  cells: Array.from({ length: 1000 }, () => ({ value: '', highlighted: false })),
  updateCell: (index, newValue) =>
    set((state) => {
      const newCells = [...state.cells];
      newCells[index] = { ...newCells[index], ...newValue };
      return { cells: newCells };
    }),
  searchCells: (query) =>
    set((state) => ({
      cells: state.cells.map((cell) =>
        cell.value.includes(query) ? { ...cell, highlighted: true } : { ...cell, highlighted: false }
      ),
    })),
}));

export default useStore;
