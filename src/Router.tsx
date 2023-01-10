import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Movie from "./pages/Movie";
import Tv from "./pages/Tv";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Movie />,
      },
      {
        path: "/tv",
        element: <Tv />,
      },
    ],
  },
]);

export default router;
