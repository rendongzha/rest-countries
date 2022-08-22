import { useRef, Fragment, useState } from "react";
import { GoSearch } from "react-icons/go";
import classes from "./SearchFilter.module.css";

const SearchFilter = (props) => {
  const countryRef = useRef();
  const [selectedRegion, setSelectedRegion] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSearch(countryRef.current.value);
  };

  const selectHandler = (e) => {
    console.log(e.target.value);
    setSelectedRegion(e.target.value);
    props.onFilter(e.target.value);
  };

  return (
    <div className={classes.searchFilter}>
      <form onSubmit={submitHandler}>
        <div className={classes.search}>
          <GoSearch className={classes.searchIcon} onClick={submitHandler} />
          <input
            type="text"
            placeholder="Search for a country..."
            name="country"
            ref={countryRef}
            className={classes.input}
          />
        </div>
      </form>
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
