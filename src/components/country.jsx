import React from "react";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  return (
    <>
      <Link to="/countryprofile" state={country} style={{ textDecoration: "none" }} >

        <div className="card" style={{margin:"0px 0px"}}>

          <div className="card-body" style={{ display: "flex",justifyContent:"space-around" }}>

            <div>
              <h4 className="card-title">{country.flag}</h4>
              <br />
              <h4 className="card-title">{country.coatOfArms.png}</h4>
              <br />
              <h4 className="card-title" style={{width:"60%"}}>{country.timezones}</h4>

            </div>
            <div>
              <h2 className="card-title" style={{color:"green"}}>{country.name.common}</h2>
              <br />
              <h4 className="card-title">FIFA : {country.fifa}</h4>
              <br />
              <h4 className="card-title">Continent: {country.continents}</h4>
            </div>

          </div>
        </div>

      </Link>



    </>
  )
}
export default Country;