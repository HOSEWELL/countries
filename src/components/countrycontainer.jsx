import React, { useState, useEffect } from "react";
import Country from "./country";
import NavBar from "./navbar";

const CountryContainer = () => {

    const [country, setCountry] = useState([])

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
            <br />
            <div className="container">
                <div className="row justify-content">
                    {
                        country.map((prod, index) => {
                            return (
                                <div className="col-md-4 mb-3" key={index}>
                                    <Country country={prod} />
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </>
    )
}
export default CountryContainer;