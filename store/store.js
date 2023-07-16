import { create } from "zustand";
import { createDataSetSlice } from "./slices/dataSetSlice";
import useImmerProduce from "../src/hooks/useImmerProduce";

const useStore = create((...p) => {
  useImmerProduce(p);
  return {
    ...createDataSetSlice(...p),
  };
});

export default useStore;
