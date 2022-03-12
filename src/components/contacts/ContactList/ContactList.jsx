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
                        <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium alias aliquam corporis delectus distinctio, dolores eveniet expedita fugiat iusto labore magnam, molestiae quae recusandae tempora vel veniam? Iure, ut.</p>
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
    </React.Fragment>
  );
};

export default ContactList;
