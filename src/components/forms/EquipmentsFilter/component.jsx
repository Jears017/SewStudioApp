import React from "react";
import { TextField, InputAdornment } from "@mui/material";

import SearchIcon from "../../../assets/icons/Search";

import "./styles.css";

const EquipmentsFilter = () => {
  return (
    <div className="equipmentsFilterContainer">
      <div>
        <TextField
          label="Наименование"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default EquipmentsFilter;
