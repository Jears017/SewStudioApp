import React from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import DatePicker from "react-datepicker";
import "./styles.css";

const OrdersForm = ({ handleClose }) => {
  const formik = useFormik({
    initialValues: {
      name: "Турбан Александр Владимирович",
      number: "255128788",
      dateStart: "12.02.2023",
      dateEnd: "22.02.2023",
      product: "Рубашка",
      typeOfWork: "Ремонт",
      price: "15",
      depositedAmount: "10",
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
        <div className="ordersFormWrapper">
          <div className="ordersFormRow">
            <TextField
              id="name"
              name="name"
              label="ФИО"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              className="orderTextfield"
            />
            <TextField
              id="number"
              name="number"
              label="Номер телефона"
              type="number"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.number && Boolean(formik.errors.number)}
              helperText={formik.touched.number && formik.errors.number}
              className="orderTextfield"
            />
          </div>
          <div className="ordersFormRow">
            <TextField
              id="dateStart"
              name="dateStart"
              label="Дата готового изделия"
              value={formik.values.dateStart}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.dateStart && Boolean(formik.errors.dateStart)}
              helperText={formik.touched.dateStart && formik.errors.dateStart}
              className="orderTextfield"
            />
            <TextField
              id="dateEnd"
              name="dateEnd"
              label="Дата готового изделия"
              value={formik.values.dateEnd}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.dateEnd && Boolean(formik.errors.dateEnd)}
              helperText={formik.touched.dateEnd && formik.errors.dateEnd}
              className="orderTextfield"
            />
          </div>
          <div className="ordersFormRow">
            <TextField
              id="product"
              name="product"
              label="Изделие"
              value={formik.values.product}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.product && Boolean(formik.errors.product)}
              helperText={formik.touched.product && formik.errors.product}
              className="orderTextfield"
            />
            <TextField
              id="typeOfWork"
              name="typeOfWork"
              label="Тип выполняемых работ"
              value={formik.values.typeOfWork}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.typeOfWork && Boolean(formik.errors.typeOfWork)}
              helperText={formik.touched.typeOfWork && formik.errors.typeOfWork}
              className="orderTextfield"
              required
            />
          </div>
          <div className="ordersFormRow">
            <TextField
              id="price"
              name="price"
              label="Стоимость"
              value={formik.values.price}
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
              className="orderTextfield"
            />
            <TextField
              id="depositedAmount"
              name="depositedAmount"
              label="Внесенная сумма"
              type="number"
              value={formik.values.depositedAmount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.depositedAmount && Boolean(formik.errors.depositedAmount)}
              helperText={formik.touched.depositedAmount && formik.errors.depositedAmount}
              className="orderTextfield"
              required
            />
          </div>
          <div className="orderCommentField">
            <TextField
              id="comment"
              name="comment"
              label="Комментарий"
              multiline
              rows={3}
              fullWidth
              value={formik.values.comment}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.comment && Boolean(formik.errors.comment)}
              helperText={formik.touched.comment && formik.errors.comment}
            />
          </div>
        </div>
        <div className="actionsOrdersForm">
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

export default OrdersForm;
