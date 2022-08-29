import { Fragment } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import CountryDetailItem from "../components/CountryDetailItem";

const CountryDetail = (props) => {
  let { countryId } = useParams();

  return (
    <Fragment>
      <BackButton />
      <CountryDetailItem countryCode={countryId} />
    </Fragment>
  );
};

export default CountryDetail;
