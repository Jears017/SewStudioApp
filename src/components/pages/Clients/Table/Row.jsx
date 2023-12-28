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
      <TableCell>{row.calories}</TableCell>
      <TableCell>{row.calories}</TableCell>
      <TableCell>10</TableCell>
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
