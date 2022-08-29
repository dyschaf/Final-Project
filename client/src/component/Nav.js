import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React, { Component } from "react";
const Nav = () => {
  return (
    <div>
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
      </Stack>
    </div>
  );
};
export default Nav;
