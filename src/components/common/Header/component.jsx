import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = ({ className }) => {
  return (
    <div className={className}>
      <AppBar position="static">
        <Toolbar>
          <Typography className="logo" variant="h6" component="div">
            Sewing Studio
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
