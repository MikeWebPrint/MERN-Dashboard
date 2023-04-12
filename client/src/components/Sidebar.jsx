import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import profileImage from "assets/profile.jpeg";
import FlexBetween from './FlexBetween';

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme
} from "@mui/material";

import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined
} from "@mui/icons-material";

const navItems =[
  {
    text: "Dashboard",
    icon: <HomeOutlined />
  },
  {
    text: "Client Facing",
    icon: null
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />
  },
  {
    text: "Geography",
    icon: <PublicOutlined />
  },
  {
    text: "Sales",
    icon: null
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />
  },
  {
    text: "Daily",
    icon: <TodayOutlined />
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />
  },
  {
    text: "Management",
    icon: null
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />
  },
]

const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  // will deternmine what page we are currently on
  const { pathname } = useLocation();
  const [active, setActive] = useState('');
  const navigate = useNavigate();
  // to navigate to other pages
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);
  // any time pathname changes, active value is set to current page URL
  return (
    // going to use material ui persistent drawer
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer 
        open = {isSidebarOpen}
        onClose={()=> setIsSidebarOpen(false)}
        variant="persistent"
        anchor="left"
        sx={{
          width: drawerWidth,
          // custom CSS for MUI component look up the CSS class on the page if necessary
          "& .MuiDrawer-paper": {
            color: theme.palette.secondary[200],
            backgroundColor: theme.palette.background.alt,
            boxSizing: "border-box",
            borderWidth: isNonMobile ? 0 : "2px",
            width: drawerWidth
          }
        }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0/5rem">
                  <Typography variant="h4" fontWeight="bold">
                    ECOMVISION
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>

            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;