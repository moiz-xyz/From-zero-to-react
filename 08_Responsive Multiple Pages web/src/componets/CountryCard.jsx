import React from 'react';

const CountryCard = ({ countrydata }) => {
  const {
    name,
    population,
    region,
    capital,
    flags
  } = countrydata;

  return (
    <div className="country-card">
      <div className="card">
        <img
          src={flags?.svg}
          alt={`${name.common} flag`}
          className="flag-img"
        />
        <h2>{name.common}</h2>
        <p>Population: {population.toLocaleString()}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital?.[0] || 'N/A'}</p>
      </div>
    </div>
  );
};

export default CountryCard;
