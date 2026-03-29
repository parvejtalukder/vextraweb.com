import { createBrowserRouter } from "react-router"; 
import RootLayout from "../layouts/rootLayout/RootLayout";
import Main from "../pages/Main/Main";
import Error from "../pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error></Error>,
    children: [
      { index: true, Component: Main },
    ],
  },
]);