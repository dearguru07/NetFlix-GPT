import React from "react";
import ReactDOM from "react-dom/client";
import LogIn from "./LogIn";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  const roots = createBrowserRouter([
    {
      path: "/",
      element: <LogIn/>,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={roots} />
    </div>
  );
};

export default Body;
