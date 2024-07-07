import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary " >
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Continent</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Asia</a></li>
                                    <li><a className="dropdown-item" href="#">Africa</a></li>
                                    <li><a className="dropdown-item" href="#">Europe</a></li>
                                    <li><a className="dropdown-item" href="#">America</a></li>

                                </ul>
                            </li>
                        </ul>
                       
                    </div>
                </div>
                <Link to="/" style={{textDecoration:"none", padding:"10px"}}>Home</Link>
            </nav>

        </>
    )
}
export default NavBar;