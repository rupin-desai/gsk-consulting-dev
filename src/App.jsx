import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HigherEducation from "./pages/HigherEducation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Services from "./pages/Services"; // Added the Services import

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true, // This makes HomePage the default route
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "services/:serviceSlug",
        element: <Services />,
      },
      {
        path: "international-education",
        // Swapped component - International route renders Higher component
        element: <HigherEducation />,
      },
      {
        path: "international-education/:courseSlug",
        // Swapped component - International route renders Higher component
        element: <HigherEducation />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;