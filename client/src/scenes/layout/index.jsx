import React, {useState} from 'react';
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import Navbar from "components/Navbar";

const Layout = () => {
  return <Box width="100%" height="100%">
    <Box>
      {/* Navbar will exist on each page and the Outlet will contain what is underneath */}
      <Navbar />
      <Outlet />
    </Box>
  </Box>
}

export default Layout
