// Country.js
import React, { useEffect, useState, useTransition } from 'react';
import Postapi from '../api/postapi';
import CountryCard from '../componets/CountryCard';

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      Postapi()
        .then(data => {
          setCountries(data);
        })
        .catch(error => {
          console.error("Error fetching countries:", error);
        });
    });
  }, []);

  if (isPending) return <h2>Loading...</h2>;

  return (
    <div className="country-list">
      {countries.map((currentCountry, index) => (
        <CountryCard countrydata={currentCountry} key={index} />
      ))}
    </div>
  );
};

export default Country;
