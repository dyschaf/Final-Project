import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React, { Component } from "react";

const Nav = () => {
  const logout = () =>
    fetch("/Logout", {
      method: "delete", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logout),
    })
      .then((req) => req.json)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

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
