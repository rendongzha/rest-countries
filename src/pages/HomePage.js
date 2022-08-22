import { Fragment } from "react";
import CountryList from "../components/CountryList";
import SearchFilter from "../components/SearchFilter";

const HomePage = (props) => {
  return (
    <Fragment>
      <SearchFilter onSearch={props.onSearch} onFilter={props.onFilter} />
      <CountryList
        searchedCountry={props.country}
        filteredRegion={props.region}
      />
    </Fragment>
  );
};

export default HomePage;
