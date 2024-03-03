// docs https://github.com/azouaoui-med/react-pro-sidebar
import { useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";

import { useSidebarContext } from "./sidebarContext";

import { Link } from "react-router-dom";
import { tokens } from "../../../theme";
import { useTheme, Box, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CallSplitIcon from '@mui/icons-material/CallSplit';
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DescriptionIcon from '@mui/icons-material/Description';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      routerLink={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const MyProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { sidebarRTL, sidebarImage } = useSidebarContext();
  const {  collapsed } = useProSidebar();
  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
        "& .sidebar": {
          border: "none",
        },
        "& .menu-icon": {
          backgroundColor: "transparent !important",
        },
        "& .menu-item": {
          // padding: "5px 35px 5px 20px !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-anchor": {
          color: "inherit !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-item:hover": {
          color: `${colors.blueAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
        "& .menu-item.active": {
          color: `${colors.greenAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar
        breakPoint="md"
        rtl={sidebarRTL}
        backgroundColor={colors.primary[400]}
        image={sidebarImage}
      >
        <Menu iconshape="square">
          
          {!collapsed && (
            <Box mb="25px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  "& .avater-image": {
                    backgroundColor: colors.primary[500],
                  },
                }}
              >
                <img
                  className="avater-image"
                  alt="profile user"
                  width="auto"
                  height="100px"
                  src={"../../assets/user.png"}
                  // style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              
            </Box>
          )}
          <Box paddingLeft={collapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

           
            <Item
              title="Payment"
              to="/payment"
              icon={<CurrencyRupeeIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Add Account"
              to="/carddetail"
              icon={<AccountBalanceIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Transaction "
              to="/transactions"
              icon={<DescriptionIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="My Bills "
              to="/bills"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Split Requests "
              to="/billcard"
              icon={<CallSplitIcon />}
              selected={selected}
              setSelected={setSelected}
            />

           
            <Item
              title="Update"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ"
              to="/faq"
              icon={<LiveHelpIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 20px 5px 20px" }}
            >
             By CodeZilla
            </Typography>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MyProSidebar;
