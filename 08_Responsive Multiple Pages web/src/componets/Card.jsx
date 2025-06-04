import React from "react";
import CountryFacts from "../api/countrydata.json";

const Card = () => {
  return (
    <div className="card-container">
      {CountryFacts.map(({ id, country, population, capital, interesting_fact }) => (
        <div className="card" key={id}>
          <h2>{country}</h2>
          <p>Population: {population}</p>
          <p>Capital: {capital}</p>
          <p>Fact: {interesting_fact}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
