import * as React from "react";
import { Table as MuiTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Row from "./Row";
import { COLUMNS } from "./columns";

function createData(name, lastDateUpdate, amount, measurementUnit) {
  return { name, lastDateUpdate, amount, measurementUnit };
}

const rows = [
  createData("Ткань красная", '20.05.2023', 20, 'м.'),
  createData("Шерсть серая", '15.06.2023', 8, 'м.'),
  createData("Кнопки разноцветные", '10.07.2023', 50, 'шт.'),
  createData("Нитки черные", '25.08.2023', 5, 'кат.'),
  createData("Замок-молния металлический", '30.09.2023', 2, 'шт.'),
  createData("Кружево белое", '05.10.2023', 12, 'м.'),
  createData("Игла для шитья", '12.11.2023', 3, 'шт.'),
  createData("Линейка пластиковая", '18.12.2023', 1, 'шт.'),
  createData("Бисер разноцветный", '24.01.2024', 100, 'г.'),
  createData("Прокладка подплечника", '30.02.2024', 10, 'шт.'),
];

const Table = () => {
  return (
    <TableContainer component={Paper}>
      <MuiTable aria-label="simple table">
        <TableHead>
          <TableRow>
            {COLUMNS.map((header) => {
              return <TableCell>{header}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
