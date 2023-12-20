import * as React from "react";
import Modal from "../../common/Modal";
import "./styles.css";
import OrdersForm from "../../forms/OrdersForm";

const OrderModal = ({
  open,
  handleClose,
}) => {
  return (
    <Modal
      open={open}
      handleClose={handleClose}
      headingSectionText="Оформить заказ"
    >
      <OrdersForm handleClose={handleClose} />
    </Modal>
  );
};

export default OrderModal;
