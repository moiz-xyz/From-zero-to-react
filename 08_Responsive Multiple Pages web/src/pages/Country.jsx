// Country.js
import React, { useEffect, useState, useTransition } from 'react';
import Postapi from '../api/postapi';
import CountryCard from '../componets/CountryCard';
import SearchFilter from "../componets/SearchFilter"

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [search , setsearch] = useState("")
  const [filter ,setfilter] = useState("All")

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

  const setfilterFunc = (country) => {
  if (filter === "All") return true;
  return country.region === filter;
};

  const setfilterCountry = (country)=> {
    if (search) {
      const name = country?.name?.common?.toLowerCase() || "";
      return name.includes(search.toLowerCase());
    }
    return country;
  };

  const filterCountries = countries.filter((country) => setfilterCountry(country) &&  setfilterFunc(country) );
  
  return (
    <div>
      <div>

      <SearchFilter search={search} 
      setsearch = {setsearch} 
      filter={filter}
      setfilter={setfilter}/> 
   
       
      </div>
    <div className="country-list">
      {filterCountries.map((currentCountry, index) => (
        <CountryCard countrydata={currentCountry} key={index} />
      ))}
    </div>
      </div>
  );
};

export default Country;
