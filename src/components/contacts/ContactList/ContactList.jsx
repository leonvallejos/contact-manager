import React from "react";
import {Link} from "react-router-dom";

let ContactList = () => {
    return (
        <React.Fragment>
            <section className="contact-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3">Contact Manager
                                    <Link to={'/contacts/add'} className="btn btn-primary ms-2">
                                        <i className="fa fa-plus-circle me-2"/>
                                        New</Link>
                                </p>
                                <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                                    accusantium alias aliquam corporis delectus distinctio, dolores eveniet expedita
                                    fugiat iusto labore magnam, molestiae quae recusandae tempora vel veniam? Iure,
                                    ut.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form className="row">
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="text" className="form-control" placeholder="Search Names"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="submit" className="btn btn-outline-dark" value="Search"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                   <div className="row">
                                       <div className="col-md-4">
                                           <img src="http://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png" alt="user-icon" className="img-fluid contact-img"/>
                                       </div>
                                       <div className="col-md-7">
                                           <ul className="list-group">
                                               <li className="list-group-item list-group-item-action">
                                                   Name: <span className="fw-bold">John Doe</span>
                                               </li>
                                               <li className="list-group-item list-group-item-action">
                                                   Mobile: <span className="fw-bold">42893017</span>
                                               </li>
                                               <li className="list-group-item list-group-item-action">
                                                   Email: <span className="fw-bold">dev.leonvallejos@gmail.com</span>
                                               </li>
                                           </ul>
                                       </div>
                                       <div className="col-md-1">
                                            <Link to={'/contacts/view/:contactId'} className="btn btn-warning">
                                                <i className="fa fa-eye"/>
                                            </Link>
                                           <Link to={'/contacts/edit/:contactId'} className="btn btn-primary">
                                               <i className="fa fa-pen"/>
                                           </Link>
                                           <button className="btn btn-danger">
                                               <i className="fa fa-trash"/>
                                           </button>
                                       </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default ContactList;
