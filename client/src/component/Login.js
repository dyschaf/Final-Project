import { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { AppContext } from "../App";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const { setAccessToken } = useContext(AppContext);

  let navigate = useNavigate();

  const handleAction = async () => {
    if (props.title === "signUp") {
      try {
        const response = await axios.post(
          "/SignUp",
          {
            email,
            password,
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("register=>", response);
        navigate("/Login");
      } catch (e) {
        setMsg(e.response.data.msg);
      }
    } else {
      try {
        const response = await axios.post(
          "/Login",
          {
            email,
            password,
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        setAccessToken(response.data);
        navigate("/");
      } catch (e) {
        setMsg(e.response.data.msg);
      }
    }
  };

  return (
    <div>
      <div>
        <h3>{props.title} Form</h3>
      </div>
      <Box component={"form"} sx={{ m: 1 }} noValidate autoComplete={"off"}>
        <TextField
          sx={{ m: 1 }}
          id="email"
          type="email"
          label="Enter email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          id="password"
          type="password"
          label="Enter password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Button variant="contained" onClick={handleAction}>
        {props.title}
      </Button>
      <div>
        <p>{msg}</p>
      </div>
    </div>
  );
};
export default Login;
