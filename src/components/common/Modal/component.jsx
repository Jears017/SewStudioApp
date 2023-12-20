import * as React from "react";
import Typography from "@mui/material/Typography";
import { Modal as MuiModal } from "@mui/material";

import "./styles.css";

const Modal = ({ open, handleClose, headingSectionText="Оформить заказ", children }) => {
  return (
    <div>
      <MuiModal open={open} onClose={handleClose}>
        <div className="modal-container">
          <header className="modalHeaderWrapper">
            <Typography className="modalHeaderTitle">
              {headingSectionText}
            </Typography>
          </header>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </MuiModal>
    </div>
  );
};

export default Modal;
