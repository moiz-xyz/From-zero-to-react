import React from 'react';
import { NavLink } from 'react-router-dom';

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
      <div className="cardcountry ">
        <img
          src={flags?.svg}
          alt={`${name.common} flag`}
          className="flag-img"
        />
        <h2>{name.common.length >10 ? name.common.slice(0,10) +"...."  :name.common}</h2>
        <p>Population: {population.toLocaleString()}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital?.[0] || 'N/A'}</p>  
        
       <NavLink to={`/country/${name.common}`}>
        <button>Read more</button>
       </NavLink>
      </div>
    </div>
  );
};

export default CountryCard;
