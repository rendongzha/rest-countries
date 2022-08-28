import { Fragment, useState } from "react";
import CountryList from "../components/CountryList";
import SearchFilter from "../components/SearchFilter";

const HomePage = (props) => {
  // const [country, setCountry] = useState("");
  // const searchHandler = (searchedCountry) => {
  //   setCountry(searchedCountry);
  // };

  // const [region, setRegion] = useState("");
  // const filterHandler = (filteredRegion) => {
  //   setRegion(filteredRegion);
  // };

  return (
    <Fragment>
      <SearchFilter />
      <CountryList />
    </Fragment>
  );
};

export default HomePage;
