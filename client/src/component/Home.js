import Table1 from "./Table1";
import Table2 from "./Table2";
import { useState, useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const [token, setToken] = useState({});
  const { accessToken } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const decode = jwt_decode(accessToken);
      console.log(decode);
      setToken(decode);
      const expire = decode.exp;
      if (expire * 1000000 < new Date().getTime()) {
        navigate("/Login");
      }
    } catch (e) {
      navigate("/Login");
    }
  }, []);

  return (
    <div className="tables-container">
      <Table1 />
      <Table2 />
    </div>
  );
};
export default Home;
