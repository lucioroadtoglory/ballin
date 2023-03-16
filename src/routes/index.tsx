import type { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Draft } from "./Draft";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Draft />,
  },
]);

export const Routes: FC = () => {
  return <RouterProvider router={router} />;
};
