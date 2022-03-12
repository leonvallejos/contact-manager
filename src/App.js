import "./App.css";
import { Routes , Route, Navigate} from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ContactList from "./components/contacts/ContactList/ContactList";

let App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<ContactList/>}/>
      </Routes>
    </React.Fragment>
  );
};

export default App;
