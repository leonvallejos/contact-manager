import {Link, link} from 'react-router-dom';

let NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <Link to={'/'} className="navbar-brand">Contact Manager</Link>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
