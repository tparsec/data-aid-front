export const createDataSetSlice = (set) => ({
  dataSet: {
    p: 1,
    items: [],
    add: set((s) => {
      s.dataSet.items.push({ id: 1 });
    }),
  },
});
