import React, { useState } from "react";
import { Button } from "@mui/material";

import BasicLayout from "../../common/BasicLayout";

import Table from "./Table";
import OrderModal from "./OrderModal";
import "./styles.css";

const Orders = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <BasicLayout>
      <div className="order-container">
        <div className="order-actions">
          <Button variant="contained" onClick={handleOpen}>
            + Оформить заказ
          </Button>
        </div>
        <Table />
      </div>
      <OrderModal open={open} handleClose={handleClose} />
    </BasicLayout>
  );
};

export default Orders;
