import CountryItem from "./CountryItem";
import classes from "./CountryList.module.css";

import { useEffect, useState } from "react";

const CountryList = (props) => {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        if (!res.ok) throw new Error("Fetching countries failed!");

        const data = await res.json();
        console.log(data);
        setAllCountries(data);
        setCountries(data);
      } catch (err) {
        alert(err);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    let filteredCountries, searchedCountries;
    if (!props.filteredRegion) filteredCountries = allCountries;
    if (
      ["Africa", "Americas", "Asia", "Europe", "Oceania"].includes(
        props.filteredRegion
      )
    ) {
      filteredCountries = allCountries.filter(
        (country) => country.region === props.filteredRegion
      );
    }
    if (!props.searchedCountry) searchedCountries = filteredCountries;
    if (props.searchedCountry)
      searchedCountries = filteredCountries.filter((country) =>
        country.name.official
          .toLowerCase()
          .includes(props.searchedCountry.toLowerCase())
      );
    setCountries(searchedCountries);
  }, [allCountries, props.filteredRegion, props.searchedCountry]);

  const sortedCountries = [...countries].sort((country1, country2) =>
    country1.name.official.localeCompare(country2.name.official)
  );

  return (
    <ul className={classes.container}>
      {sortedCountries.map((country) => (
        <CountryItem
          key={country.name.official}
          img={country.flags.png}
          country={country.name.official}
          code={country.cca3}
          population={country.population}
          region={country.region}
          capital={country.capital} //why not capital[0] ?
        />
      ))}
    </ul>
  );
};

export default CountryList;
