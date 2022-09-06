import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React, { useContext, Component } from "react";
import { AppContext } from "../App";

const Nav = () => {
  const { setAccessToken } = useContext(AppContext);

  const navigate = useNavigate();
  const logout = () =>
    fetch("/Logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        setAccessToken(null);
        navigate("/login");
      }
    });

  return (
    <div className="nav">
      <Stack spacing={2} direction="row">
        <Button component={Link} to="/">
          Home
        </Button>
        <Button component={Link} to="/Login">
          Login
        </Button>
        <Button component={Link} to="/SignUp">
          SignUp
        </Button>
        <Button
          align="right"
          onClick={logout}
          className="left nav"
          // component={Link}
        >
          Logout
        </Button>
      </Stack>
    </div>
  );
};
export default Nav;
