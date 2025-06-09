import React, { useEffect, useState, useTransition } from 'react';
import { useParams } from 'react-router-dom';
import { postapi2 } from '../api/postapi';

const CountryDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      postapi2(id)
        .then(data => {
          setCountry(data);
        })
        .catch(error => {
          console.error("Error fetching country details:", error);
        });
    });
  }, [id]);

  if (isPending || !country) return <h2>Loading...</h2>;

  const { name, population, region, capital, flags, subregion, languages, currencies, timezones } = country;

  return (
    <div className="country-details-container">
        <div>
      <img src={flags.png} alt={`Flag of ${name.common}`} />

        </div>
        <div>

      <h1>{name.common}</h1>
      <p><strong>Capital:</strong> {capital?.[0]}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Subregion:</strong> {subregion}</p>
      <p><strong>Population:</strong> {population.toLocaleString()}</p>
      <p><strong>Languages:</strong> {languages && Object.values(languages).join(", ")}</p>
      <p><strong>Currencies:</strong> {currencies && Object.values(currencies).map(c => `${c.name} (${c.symbol})`).join(", ")}</p>
        </div>
    
    </div>
  );
};

export default CountryDetails;
