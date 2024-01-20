import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import {
  registerWithEmailAndPassword,
  logInWithEmailAndPassword,
  auth,
} from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { LOGIN, PASSWORD } from './constants'

const AuthForm = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validationSchema: validationSchema,
    // onSubmit: (values) => {
    //   console.log(values);
    // },
  });

  const handleRegister = (e) => {
    e.preventDefault();
    registerWithEmailAndPassword(formik.values);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    logInWithEmailAndPassword(formik.values);
  };

  if (user) {
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="loginField">
          <TextField
            name={LOGIN}
            className="field"
            label="Логин"
            value={formik.values[LOGIN]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched[LOGIN] && Boolean(formik.errors[LOGIN])}
            helperText={formik.touched[LOGIN] && formik.errors[LOGIN]}
          />
        </div>
        <div className="loginField">
          <TextField
            name={PASSWORD}
            className="field"
            type="password"
            label="Пароль"
            value={formik.values[PASSWORD]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched[PASSWORD] && Boolean(formik.errors[PASSWORD])}
            helperText={formik.touched[PASSWORD] && formik.errors[PASSWORD]}
          />
        </div>
        <div className="authActions">
          <Button variant="contained" onClick={handleLogin}>
            Войти
          </Button>
          <Button variant="contained" onClick={handleRegister}>
            Зарегистрироваться
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
