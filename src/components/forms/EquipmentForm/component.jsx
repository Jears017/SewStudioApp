import React from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";

import { NAME, DATE_LAST_DELIVERY, AMOUNT, MEASUREMENT_UNIT, COMMENT } from "./constants";
import "./styles.css";
import DatePicker from "../../controls";
import moment from "moment";

const EquipmentForm = ({ handleClose }) => {
  const formik = useFormik({
    initialValues: {
      name: "Турбан Александр Владимирович",
      dateOfLastDelivery: null,
      measurementUnit: "кг",
      amount: "15",
      comment: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="equipmentFormWrapper">
          <div className="equipmentFormRow">
            <TextField
              name={NAME}
              label="Наименование"
              value={formik.values[NAME]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched[NAME] && Boolean(formik.errors[NAME])}
              helperText={formik.touched[NAME] && formik.errors[NAME]}
              className="equipmentTextfield"
            />
            <DatePicker
              name={DATE_LAST_DELIVERY}
              label="Дата последней поставки"
              value={formik.values[DATE_LAST_DELIVERY]}
              onChange={(value) => {
                formik.setFieldValue(DATE_LAST_DELIVERY, moment(value));
                }}
              onBlur={formik.handleBlur}
              error={
                formik.touched[DATE_LAST_DELIVERY] && Boolean(formik.errors[DATE_LAST_DELIVERY])
              }
              helperText={formik.touched[DATE_LAST_DELIVERY] && formik.errors[DATE_LAST_DELIVERY]}
              className="equipmentTextfield"
            />
          </div>
          <div className="equipmentFormRow">
            <TextField
              name={AMOUNT}
              label="Количество"
              value={formik.values[AMOUNT]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched[AMOUNT] && Boolean(formik.errors[AMOUNT])}
              helperText={formik.touched[AMOUNT] && formik.errors[AMOUNT]}
              className="equipmentTextfield"
            />
            <TextField
              name={MEASUREMENT_UNIT}
              label="Еденица измерений"
              value={formik.values[MEASUREMENT_UNIT]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched[MEASUREMENT_UNIT] && Boolean(formik.errors[MEASUREMENT_UNIT])}
              helperText={formik.touched[MEASUREMENT_UNIT] && formik.errors[MEASUREMENT_UNIT]}
              className="equipmentTextfield"
            />
          </div>
          <div className="equipmentCommentField">
            <TextField
              name={COMMENT}
              label="Комментарий"
              multiline
              rows={3}
              fullWidth
              value={formik.values[COMMENT]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched[COMMENT] && Boolean(formik.errors[COMMENT])}
              helperText={formik.touched[COMMENT] && formik.errors[COMMENT]}
            />
          </div>
        </div>
        <div className="actionsEquipmentForm">
          <Button onClick={handleClose} color="primary" variant="contained" type="submit">
            Отменить
          </Button>
          <Button color="primary" variant="contained" type="submit">
            Добавить
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EquipmentForm;
