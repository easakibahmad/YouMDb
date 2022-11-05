import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Pages/Home/Home";
import WatchList from "../Components/Pages/WatchList/WatchList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/watch",
        element: <WatchList></WatchList>,
      },
    ],
  },
]);
