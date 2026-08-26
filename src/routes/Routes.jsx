import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/rootLayout/RootLayout";
import Main from "../pages/Main/Main";
import Error from "../pages/Error/Error";
import ServicesPage from "../pages/Services/ServicesPage";
import About from "../pages/About/About";
import Pricing from "../pages/Pricing/Pricing";
import Contact from "../pages/Contact/Contact";
import FreeConsultation from "../pages/FreeConsultation/FreeConsultation";
import LegalPage from "../pages/Legal/LegalPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error />,
    children: [
      { index: true, Component: Main },
      { path: "services", Component: ServicesPage },
      { path: "about", Component: About },
      { path: "pricing", Component: Pricing },
      { path: "contact", Component: Contact },
      { path: "free-consultation", Component: FreeConsultation },
      { path: "disclaimer", element: <LegalPage slug="disclaimer" /> },
      { path: "terms-of-use", element: <LegalPage slug="terms" /> },
      { path: "privacy-policy", element: <LegalPage slug="privacy" /> },
      { path: "cookie-policy", element: <LegalPage slug="cookie" /> },
    ],
  },
]);