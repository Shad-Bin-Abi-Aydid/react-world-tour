import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    
    // In react, this is the way of push array
    const newVisitedCountries = [...visitedCountries, country];

    setVisitedCountries(newVisitedCountries);

  };

  return (
    <div>
      Countries: {countries.length}
      <div>
        <h4>Visited Countries: {visitedCountries.length}</h4>
        <ul>
            {
              visitedCountries.map(country => <li>{country.name.common}</li>)
            }
        </ul>
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country 
          key={countries.cca3} 
          handleVisitedCountry = {handleVisitedCountry}
          country={country}>

          </Country>
        ))}
      </div>
    </div>
  );
}
