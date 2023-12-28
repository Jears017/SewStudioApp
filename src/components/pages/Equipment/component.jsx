import React, { useState } from "react";
import { Button } from "@mui/material";

import BasicLayout from "../../common/BasicLayout";

import Table from "./Table";
import "./styles.css";
import EquipmentModal from "./EquipmentModal";
import EquipmentsFilter from "../../forms/EquipmentsFilter";
import PlusIcon from "../../../assets/icons/Plus";

const Equipment = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <BasicLayout>
      <div className="equipmentContainer">
        <div className="equipmentActions">
          <Button variant="contained" onClick={handleOpen}>
            <PlusIcon className="plusIcon" /> Добавить инвентарь
          </Button>
        </div>
        <div>
          <EquipmentsFilter />
        </div>
        <Table />
      </div>
      <EquipmentModal open={open} handleClose={handleClose} />
    </BasicLayout>
  );
};

export default Equipment;
