import { createBrowserRouter } from "react-router-dom";
import Main from "./src/components/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

export default router;
