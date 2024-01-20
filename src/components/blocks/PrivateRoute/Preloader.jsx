import React from "react";
import { CircularProgress, Box } from "@mui/material/";
import './styles.css'


export const Spinner = () => {
  return (
    <Box className="preloader">
      <CircularProgress />
    </Box>
  );
};
