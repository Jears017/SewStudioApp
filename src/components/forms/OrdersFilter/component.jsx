import React from "react";
import { TextField, InputAdornment } from "@mui/material";

import SearchIcon from "../../../assets/icons/Search";
import DatePicker from "../../controls";

import "./styles.css";

const OrdersFilter = () => {
  return (
    <div className="ordersFilterContainer">
      <div>
        <TextField
          label="Изделие"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div>
        <TextField label="Тип работ" />
      </div>
      <div>
        <DatePicker label="Дата принятия" />
      </div>
      <div>
        <DatePicker label="Дата выдачи" />
      </div>
    </div>
  );
};

export default OrdersFilter;
