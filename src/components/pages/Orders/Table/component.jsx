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

function createData(product, typeOfWork, dateStart, dateEnd, client, phoneNumber, price, depositedAmount) {
  return { product, typeOfWork, dateStart, dateEnd, client, phoneNumber, price, depositedAmount };
}

const rows = [
  createData("Брюки", "ремонт", '20.12.2023', '25.12.2023', 'Лучиц Денис Валерьевич', '+375445674589', 20, 10),
  createData("Платье", "изготовление", '18.12.2023', '23.12.2023', 'Иванова Анна Сергеевна', '+375298765432', 15, 8),
  createData("Куртка", "пошив", '22.12.2023', '28.12.2023', 'Смирнов Василий Петрович', '+375336547821', 25, 12),
  createData("Шапка", "переделка", '19.12.2023', '24.12.2023', 'Петров Николай Игоревич', '+375294563278', 18, 9),
  createData("Пальто", "чистка", '21.12.2023', '27.12.2023', 'Козлова Елена Александровна', '+375447890123', 30, 15),
  createData("Джинсы", "замена молнии", '17.12.2023', '22.12.2023', 'Соколов Андрей Викторович', '+375332345678', 22, 11),
  createData("Рубашка", "подгонка размера", '23.12.2023', '29.12.2023', 'Михайлов Сергей Иванович', '+375298765432', 17, 7),
  createData("Свитер", "вязка", '18.12.2023', '23.12.2023', 'Коваленко Юлия Владимировна', '+375445674589', 28, 14),
  createData("Юбка", "ремонт швов", '20.12.2023', '25.12.2023', 'Григорьева Ольга Анатольевна', '+375336547821', 19, 9),
  createData("Пиджак", "подгонка длины рукавов", '22.12.2023', '28.12.2023', 'Белов Дмитрий Игоревич', '+375294563278', 24, 12),
  createData("Рюкзак", "ремонт", '23.12.2023', '27.12.2023', 'Белов Дмитрий Игоревич', '+375294563278', 20, 8),
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
            <Row key={row.product} row={row} />
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
