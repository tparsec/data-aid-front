import { DB_CONNECTION } from "../../src/constants/dataSets";

export const createDataSetSlice = (set) => ({
  dataSet: {
    p: 1,
    items: [],
    add: async (type, data) => {
      try {
        const response = await fetch("https://localhost:7004/api/datasets", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ type, ...data }),
        });

        const result = await response.json();
        set((s) => {
          s.dataSet.items.push(result);
        });
      } catch (error) {
        console.error("Error:", error);
      }
    },
    get: async () => {
      const res = await fetch("https://localhost:7004/api/datasets");
      set((s) => {
        s.dataSet.items = res;
      });
    },
  },
});
