import React from "react";
import NavBar from "./navbar";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const CountryProfile = () => {
    const location = useLocation()
    const country = location.state;
    console.log(location.state);
    return (
        <>
            <NavBar />
            <div className="card" style={{ margin: "0px 50px", textWrap: "wrap", display: "flex" }} >

                <div className="card-body" style={{ display: "grid", justifyContent: "space-around" }}>

                    <div style={{ justifyContent: "space-around", display: "flex", backgroundColor: "blue", padding: "10px", borderRadius: "10px" }}>
                        <img src={country.flags.png} alt="" style={{ width: "20%" }} />
                        <h2 style={{ color: "green" }}> Country: {country.name.common}</h2>
                        <img src={country.coatOfArms?.png} alt="" style={{ width: "13%" }} />
                    </div>
                    <div>
                        <h4 >Capital : {country.capital}</h4>
                        <h4 >FIFA : {country.fifa}</h4>
                        <h4 >Continent: {country.continents}</h4>
                        <h4 >Population: {country.population}</h4>
                        <h4 >Area: {country.area} km</h4>
                        
                        <br />
                        <h4>{country.timezones}</h4>
                        <br />
                    </div>

                </div>
                <h5> NEIGHBOURS:{country.borders?country.borders.map((border)=>{
                        return(
                            <Link to='/border' state={border}>
                                <h4>{border}</h4>
                            </Link>
                        )
                    }):null}</h5>
            </div>
           

        
        </>
    )
}
export default CountryProfile;