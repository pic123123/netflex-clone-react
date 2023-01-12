import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";

// import Movie, { movieLoader } from "./pages/Movie";
import Movie from "./pages/Movie";
import Tv from "./pages/Tv";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Movie />,
        // loader: movieLoader,
      },
      {
        path: "/tv",
        element: <Tv />,
      },
    ],
  },
]);

export default router;
