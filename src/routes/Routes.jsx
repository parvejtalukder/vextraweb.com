import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/rootLayout/RootLayout";
import Main from "../pages/Main/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <p>Error</p>,
    children: [
      { index: true, Component: Main },
    ]
  }
]);