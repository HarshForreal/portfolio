// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.jsx";
// import Layout from "./components/Layout.jsx";
// import Contact from "./pages/Contact.jsx";
// import About from "./pages/AboutPage.jsx";
// import PorjectRedirectPage from "./pages/ProjectRedirectPage.jsx";
// import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />, // Use the layout  component
//     children: [
//       {
//         path: "/",
//         element: <App />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "ProjectRedirectPage",
//         element: <PorjectRedirectPage />,
//       },
//     ],
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },

//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
// import Layout from "./components/Layout.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/AboutPage.jsx";
import ProjectRedirectPage from "./pages/ProjectRedirectPage.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Content from "./pages/Content.jsx";
import Footer from "./components/Footer.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//   }, // Use the layout  component
//   // {
//   //   path: "/",
//   //   element: <App />,
//   // },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "ProjectRedirectPage",
//     element: <PorjectRedirectPage />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <Navbar />
//     <Routes>
//       <Route path="/" element={<Content />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/ProjectRedirectPage" element={<ProjectRedirectPage />} />
//     </Routes>
//     <Footer />
//   </BrowserRouter>
// );

const MainApp = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/ProjectRedirectPage"
            element={<ProjectRedirectPage />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
);
