import { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import classes from "./SearchFilter.module.css";

const SearchFilter = (props) => {
  const [inputCountry, setInputCountry] = useState(() => {
    if (localStorage.getItem("search"))
      return JSON.parse(localStorage.getItem("search"));

    return "";
  });

  const [selectedRegion, setSelectedRegion] = useState(() => {
    if (localStorage.getItem("filter"))
      return JSON.parse(localStorage.getItem("filter"));

    return "";
  });

  const inputHandler = (e) => {
    setInputCountry(e.target.value);
    props.onSearch(e.target.value);
  };

  const selectHandler = (e) => {
    setSelectedRegion(e.target.value);
    props.onFilter(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("search", JSON.stringify(inputCountry));
  }, [inputCountry]);

  useEffect(() => {
    localStorage.setItem("filter", JSON.stringify(selectedRegion));
  }, [selectedRegion]);

  return (
    <div className={classes.searchFilter}>
      <div className={classes.search}>
        <GoSearch className={classes.searchIcon} />
        <input
          type="text"
          placeholder="Search for a country..."
          name="country"
          value={inputCountry}
          onChange={inputHandler}
          className={classes.input}
        />
      </div>

      <div className={classes["select-wrapper"]}>
        <select
          value={selectedRegion}
          onChange={selectHandler}
          className={classes.filter}
        >
          {/* two-way binding to get the value of selected option */}
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
