// Country.js
import React, { useEffect, useState, useTransition } from 'react';
import Postapi from '../api/postapi';
import CountryCard from '../componets/CountryCard';
import SearchFilter from "../componets/SearchFilter"

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [search.setsearch] = useState()
  const [filter.setfilter] = useState()

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
    <div>
      <SearchFilter search={serach} 
      setsearch = {setsearch} 
      filter={filter}
       setfilter={setfilter}/> 
       
    <div className="country-list">
      {countries.map((currentCountry, index) => (
        <CountryCard countrydata={currentCountry} key={index} />
      ))}
    </div>
      </div>
  );
};

export default Country;
