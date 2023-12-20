import * as React from "react";
import Modal from "../../common/Modal";
import "./styles.css";
import EquipmentForm from "../../forms/EquipmentForm";


const EquipmentModal = ({
  open,
  handleClose,
}) => {
  return (
    <Modal
      open={open}
      handleClose={handleClose}
      headingSectionText="Добавить инвентарь"
    >
      <EquipmentForm handleClose={handleClose} />
    </Modal>
  );
};

export default EquipmentModal;
