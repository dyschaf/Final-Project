import logo from "./logo.svg";
import Nav from "./component/Nav";
import Table1 from "./component/Table1";
import Table2 from "./component/Table2";

import React, { Component, useState, useEffect } from "react";
// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// router.use(cors());
import ErrorBoundary from "./component/ErrorBoundary";
import "./App.css";

function App() {
  return (
    <>
      {/* <ErrorBoundary> */}
      <Nav />
      {/* </ErrorBoundary> */}
      <div>
        hi
        <ErrorBoundary>
          <Table1 />
          <Table2 />
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
