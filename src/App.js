import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import React from "react";

let App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/contacts/list" />
      </Routes>
    </React.Fragment>
  );
};

export default App;
