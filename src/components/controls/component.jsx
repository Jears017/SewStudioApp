import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker as MuiDatepicker } from '@mui/x-date-pickers/DatePicker';

const DatePicker = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MuiDatepicker {...props} />
    </LocalizationProvider>
  );
};

export default DatePicker
