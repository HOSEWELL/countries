import React, { useState, useEffect } from "react";
import Country from "./country";
import NavBar from "./navbar";
import axios from "axios";

const CountryContainer = () => {
    const [country, setCountry] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((response) => {
                setCountry(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const filteredCountries = country.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <NavBar />
            <br />
            <div className="container">
                <input
                style={{borderRadius:"10px",padding:"10px",margin:"10px"}}
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search for a country...."
                />
                <div className="row justify-content">
                    {filteredCountries.map((prod, index) => {
                        return (
                            <div className="col-md-4 mb-3" key={index}>
                                <Country country={prod} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default CountryContainer;
