import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Pages/Home/Home";
import WatchList from "../Components/Pages/WatchList/WatchList";
import Login from "../Components/Pages/Login/Login";
import Signup from "../Components/Pages/Signup/Signup";
import Checkout from "../Components/Pages/Checkout/Checkout";

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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/movies/${params.id}`),
      },
    ],
  },
]);
