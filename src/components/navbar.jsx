import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid" style={{ backgroundColor: 'grey',color:'red', display: 'flex' }}>
                    <h2>COUNTRIES IN THE WORLD</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">CONTINENTS </a>
                                <ul className="dropdown-menu">
                                    <Link to='/continentprofile' state={'Africa'}>
                                        <li><h2>Africa</h2></li>
                                    </Link>
                                    <Link to='/continentprofile' state={'Oceania'}>
                                        <li><h2>Oceania</h2></li>
                                    </Link>
                                    <Link to='/continentprofile' state={'Europe'}>
                                        <li><h2>Europe</h2></li>
                                    </Link>
                                    <Link to='/continentprofile' state={'North America'}>
                                        <li><h2>North America</h2></li>
                                    </Link>
                                    <Link to='/continentprofile' state={'South America'}>
                                        <li><h2>South America</h2></li>
                                    </Link>
                                    <Link to='/continentprofile' state={'Asia'}>
                                        <li><h2>Asia</h2></li>
                                    </Link>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" style={{ textDecoration: "none", padding: "10px" }}>Home</Link>
                </div>
                
            </nav>
        </>
    )
}
export default NavBar;