import React, { useState } from "react";

import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  Typography,
  Tooltip,
  Select,
} from "@mui/material";

import {
  Language as LanguageIcon,
  LightMode as LightModeIcon,
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  Login as LoginIcon,
} from "@mui/icons-material/";

import { Link } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";

import { logout, auth } from "../../../firebase";

import Navbar from "../Navbar";
import "./styles.css";

const BasicLayout = ({ children }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [user] = useAuthState(auth);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="wrapper">
      <div className="header">
        <div className="headerWrapper">
          <Typography>Sew studio</Typography>
          {user ? (
            <div>
              <IconButton onClick={handleOpenUserMenu}>
                <AccountCircleIcon className="icon" />
              </IconButton>
              <Menu
                className="logout"
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography onClick={logout} textAlign="center">
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Link className="loginLink" to={"/auth"}>
              <LoginIcon className="icon" />
            </Link>
          )}
        </div>
      </div>
      {user && <Navbar className="navbar" />}
      <main className="mainContent">{children}</main>
    </div>
  );
};

export default BasicLayout;
