import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

const Layout = () => {
  return (
    <Box width="100%" height="100%">
      <Box>
        {/* Navbar will exist on each page and the Outlet will contain what is underneath */ }
        {/* from reactrouter.com: An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route. */ }
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
