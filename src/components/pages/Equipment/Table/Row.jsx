import React from "react";

import { TableCell, TableRow, IconButton } from "@mui/material";

import TrashIcon from "../../../../assets/icons/Trash";
import PencilIcon from "../../../../assets/icons/Pencil";

import "./styles.css";

const Row = ({ row }) => {
  return (
    <TableRow className="table-row">
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell>{row.lastDateUpdate}</TableCell>
      <TableCell>{row.amount}</TableCell>
      <TableCell>{row.measurementUnit }</TableCell>
      <TableCell>
        <div>
          <IconButton>{<PencilIcon />}</IconButton>
          <IconButton>{<TrashIcon />}</IconButton>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default Row;
