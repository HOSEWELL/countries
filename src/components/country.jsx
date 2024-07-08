import React from "react";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  return (
    <div style={styles.container}>
      <Link to="/countryprofile" state={country} style={styles.link}>
        <div className="card" style={styles.card}>
          <div className="card-body">
            <div style={styles.imageContainer}>
              <img src={country.flags.png} alt="" style={styles.image} />
              {country.coatOfArms?.png && (
                <img src={country.coatOfArms.png} alt="" style={styles.image} />
              )}
            </div>
            <h2 style={styles.title}>{country.name.common}</h2>
            <div style={styles.details}>
              <p style={styles.detailItem}>Timezones: {country.timezones}</p>
              <p style={styles.detailItem}>FIFA Code: {country.fifa}</p>
              <p style={styles.detailItem}>Continent: {country.continents}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: "inline-block",
    margin: "10px",
    width: "300px",
    height: "350px",
    
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
  },
  image: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "50%",
  },
  title: {
    color: "#007BFF",
    fontSize: "1.5rem",

    textAlign: "center",
    margin: "10px 0",
  },
  details: {
    flexGrow: 1,
    padding: "0 20px",
  },
};

export default Country;
