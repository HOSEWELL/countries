import React, { useEffect, useState } from "react";
import NavBar from "./navbar";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ContinentProfile = () => {
    const [countries, setCountry] = useState([])
    const location = useLocation()
    const continentname = location.state;
    console.log(location.state);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => {
                response.json().then((resp) => {
                    console.log(resp)
                    setCountry(resp)
                })
            }).catch((err) => {
                console.err(err);
            })
    }, [])

    return (
        <>
            <NavBar />

            <div className="container">
                <h1>COUNTRIES IN {continentname}</h1>
                <div className="row justify-content-around">
                    {
                        countries.filter(country => country.continents.includes(continentname)).map((country, index) => {
                            return (
                                <div className="col-md-4 mb-4" key={index}>
                                    <div className="card countrycontainer">
                                        <img src={country.flags.png} alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">COUNTRY:{country.altSpellings[1]}</h5>
                                            <h5>CAPITAL:{country.capital}</h5>
                                            <h5>CONTINENT:{country.continents}</h5>
                                            <Link to='/countryprofile' state={country} class="btn btn-secondary">More</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}
export default ContinentProfile;