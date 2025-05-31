import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HigherEducation from "./pages/HigherEducation";
import InternationalEducation from "./pages/InternationalEducation";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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
        path: "higher-education",
        // Swapped component - Higher Education route renders International component
        element: <InternationalEducation />,
      },
      {
        path: "higher-education/:courseSlug",
        // Swapped component - Higher Education route renders International component
        element: <InternationalEducation />,
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
