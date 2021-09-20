import { Container } from "@mui/material";
import React from "react";
import Auth from "../Auth/Auth";
import Header from "../Layouts/Header";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const LoginRegister = () => {
  const { inforUser, isAuthenticated } = useSelector(
    (state: { user: any }) => state.user
  );
  return inforUser !== null && isAuthenticated === true ? (
    <Redirect to="/" />
  ) : (
    <Container maxWidth="lg">
      <Header />
      <Auth />
    </Container>
  );
};

export default LoginRegister;
