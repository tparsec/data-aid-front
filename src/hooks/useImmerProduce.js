import { produce } from "immer";

const useImmerProduce = (p) => {
  const set = p[0];
  p[0] = (action) => () => set(produce(action));
};

export default useImmerProduce;
