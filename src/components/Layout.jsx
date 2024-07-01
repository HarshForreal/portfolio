import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
// import Footer from "./Footer";
function Layout() {
  return (
    <div>
      {/* <Footer /> */}
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
