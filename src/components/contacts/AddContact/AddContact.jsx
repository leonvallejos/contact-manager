import React from "react";

let AddContact = () => {
    return (
        <>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-success fw-bold">
                                Create Contact
                            </p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
                                consequuntur corporis eum hic magni odit porro quia, reprehenderit sunt, suscipit
                                tempora voluptatibus? Dolorem iusto minus non quaerat reiciendis. Commodi, in.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Name"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddContact;
