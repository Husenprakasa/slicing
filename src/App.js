import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./page/Home";
import Login from "./page/Login";
import Detail from "./page/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/detail",
    element: <Detail />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
