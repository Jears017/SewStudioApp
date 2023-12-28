import React from "react";

import { TableCell, TableRow, IconButton } from "@mui/material";

import TrashIcon from "../../../../assets/icons/Trash";
import PencilIcon from "../../../../assets/icons/Pencil";
import PrintIcon from "../../../../assets/icons/Print";

import "./styles.css";

const Row = ({ row }) => {
  return (
    <TableRow className="table-row">
      <TableCell component="th" scope="row">
        {row.product}
      </TableCell>
      <TableCell>{row.typeOfWork}</TableCell>
      <TableCell>{row.dateStart}</TableCell>
      <TableCell>{row.dateEnd}</TableCell>
      <TableCell>{row.client}</TableCell>
      <TableCell>{row.phoneNumber}</TableCell>
      <TableCell>{row.price}</TableCell>
      <TableCell>{row.depositedAmount}</TableCell>
      <TableCell>
        <div>
          <IconButton>{<PencilIcon />}</IconButton>
          <IconButton>{<PrintIcon />}</IconButton>
          <IconButton>{<TrashIcon />}</IconButton>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default Row;
