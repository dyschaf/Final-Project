import React from "react";
import { Component, useState, createContext } from "react";
import logo from "./logo.svg";
import Nav from "./component/Nav";
import Home from "./component/Home";
import Login from "./component/Login";

import { Routes, Route, useNavigate } from "react-router-dom";
// import { Auth } from "../auth/Auth";
import "./App.css";
import ErrorBoundary from "./component/ErrorBoundary";

export const AppContext = createContext(null);

function App() {
  const [accessToken, setAccessToken] = useState("");
  return (
    <AppContext.Provider value={{ accessToken, setAccessToken }}>
      <div className="App">
        <ErrorBoundary>
          <Nav />
        </ErrorBoundary>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login title="login" />} />
            <Route path="/SignUp" element={<Login title="signUp" />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </AppContext.Provider>
  );
}

export default App;
