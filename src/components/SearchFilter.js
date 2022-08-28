// import { useState } from "react";
import { GoSearch } from "react-icons/go";
import classes from "./SearchFilter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeSearch } from "../store/searchSlice";
import { changeFilter } from "../store/filterSlice";

const SearchFilter = (props) => {
  // const [inputCountry, setInputCountry] = useState("");

  // const [selectedRegion, setSelectedRegion] = useState("");

  // const inputHandler = (e) => {
  //   setInputCountry(e.target.value);
  //   props.onSearch(e.target.value);
  // };

  // const selectHandler = (e) => {
  //   setSelectedRegion(e.target.value);
  //   props.onFilter(e.target.value);
  // };

  const search = useSelector((state) => state.search.value);
  const filter = useSelector((state) => state.filter.value);
  const dispatch = useDispatch();

  const changeSearchHandler = (e) => {
    dispatch(changeSearch(e.target.value));
  };

  const changeFilterHandler = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={classes.searchFilter}>
      <div className={classes.search}>
        <GoSearch className={classes.searchIcon} />
        <input
          type="text"
          placeholder="Search for a country..."
          name="country"
          value={search}
          onChange={changeSearchHandler}
          className={classes.input}
        />
      </div>

      <div className={classes["select-wrapper"]}>
        <select
          value={filter}
          onChange={changeFilterHandler}
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
