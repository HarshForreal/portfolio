import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Layout from "./components/Layout.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/AboutPage.jsx";
import PorjectRedirectPage from "./pages/ProjectRedirectPage.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use the layout  component
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "ProjectRedirectPage",
        element: <PorjectRedirectPage />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
