import "./App.css";
import {Routes, Route, Navigate} from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ContactList from "./components/contacts/ContactList/ContactList";
import AddContact from "./components/contacts/AddContact/AddContact";

let App = () => {
    return (
        <React.Fragment>
            <NavBar/>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
                <Route path={'/contacts/list'} element={<ContactList/>}/>
                <Route path={'/contacts/add'} element={<AddContact/>}/>
            </Routes>
        </React.Fragment>
    );
};

export default App;
