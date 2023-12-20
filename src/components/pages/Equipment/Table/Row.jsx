import React from "react";

import { TableCell, TableRow } from "@mui/material";

import "./styles.css";


const Row = ({ row }) => {
  return (
    <TableRow className="table-row">
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell>{row.calories}</TableCell>
      <TableCell>{row.calories}</TableCell>
      <TableCell>{row.calories}</TableCell>
      <TableCell></TableCell>
    </TableRow>
  );
};

export default Row;
