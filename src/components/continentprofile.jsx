import React from "react";
import NavBar from "./navbar";
import { useLocation } from "react-router-dom";

const ContinentProfile = () => {
    const location = useLocation()
    const country = location.state;
    console.log(location.state);
    return (
        <>
            <NavBar />

            <div className="card">
                <h1 className="card-title">{country.continents}</h1>
            </div>

        </>
    )
}
export default ContinentProfile;