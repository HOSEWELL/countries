import React from "react";
import NavBar from "./navbar";
import { useLocation } from "react-router-dom";

const CountryProfile = () => {
    const location = useLocation()
    const country = location.state;
    console.log(location.state);
    return (
        <>
            <NavBar />


            <div className="card" style={{ margin: "0px 50px" }} >

                <div className="card-body" style={{ display: "flex", justifyContent: "space-around" }}>

                    <div>
                        <h4 className="card-title">{country.flag}</h4>
                        <h4 className="card-title">{country.coatOfArms.png}</h4>
                        <br />
                        <h4 className="card-title">Population: {country.population}</h4>

                        <br />
                        <h4 className="card-title" style={{ width: "70%" }}>{country.timezones}</h4>

                    </div>
                    <div>
                        <h2 className="card-title" style={{ color: "green" }}> Country: {country.name.common}</h2>
                        <br />
                        <h4 className="card-title">Capital : {country.capital}</h4>
                        <br />
                        <h4 className="card-title">FIFA : {country.fifa}</h4>
                        <br />
                        <h4 className="card-title">Continent: {country.continents}</h4>
                        <br />




                    </div>

                </div>
                <h4 className="card-title">Neighbours : {country.borders}</h4>

            </div>
        </>
    )
}
export default CountryProfile;