import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import BasicLayout from "../../common/BasicLayout";

import "./styles.css";
import AuthForm from "../../forms/AuthForm";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const signIn = (values) => {
    return console.log("values", values);
  };

  return (
    
    <BasicLayout>
      <div className="authWrapper">
        <AuthForm />
      </div>
    </BasicLayout>
  );
};

export default Auth;
