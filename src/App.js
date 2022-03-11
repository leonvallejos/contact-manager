import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar/NavBar";

let App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/contacts/list" element={<NavBar/>}/>
      </Routes>
    </React.Fragment>
  );
};

export default App;
