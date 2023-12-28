import React, { useState } from "react";
import { Button } from "@mui/material";

import BasicLayout from "../../common/BasicLayout";

import Table from "./Table";
import OrderModal from "./OrderModal";
import "./styles.css";
import OrdersFilter from "../../forms/OrdersFilter";
import PlusIcon from '../../../assets/icons/Plus'

const Orders = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <BasicLayout>
      <div className="order-container">
        <div className="order-actions">
          <Button variant="contained" onClick={handleOpen}>
            <PlusIcon className='plusIcon'/> Оформить заказ
          </Button>
        </div>
        <div>
          <OrdersFilter />
        </div>
        <Table />
      </div>
      <OrderModal open={open} handleClose={handleClose} />
    </BasicLayout>
  );
};

export default Orders;
