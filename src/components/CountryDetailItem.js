import { useEffect, useState } from "react";
import BorderCountries from "./BorderCountries";
import classes from "./CountryDetailItem.module.css";

const CountryDetailItem = (props) => {
  const [detailedCountry, setDetailedCountry] = useState("");

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/alpha/${props.countryCode}`;

    const fetchCountry = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Fetching country failed!");

        const data = await res.json();
        console.log(data);
        setDetailedCountry(data[0]);
      } catch (err) {
        alert(err);
      }
    };

    fetchCountry();
  }, [props.countryCode]);

  console.log(detailedCountry);

  if (!detailedCountry) return;

  let nativeName = "";
  if (detailedCountry.name.nativeName) {
    const nativeNameObj = detailedCountry.name.nativeName;
    Object.keys(nativeNameObj).forEach(
      (key) => (nativeName = nativeNameObj[key].official)
    );
  }

  const currencies = [];
  if (detailedCountry.currencies) {
    const curObj = detailedCountry.currencies;
    Object.keys(curObj).forEach((key) => currencies.push(curObj[key].name));
  }

  const languages = [];
  if (detailedCountry.languages) {
    const lanObj = detailedCountry.languages;
    Object.keys(lanObj).forEach((key) => languages.push(lanObj[key]));
  }

  return (
    <div className={classes.container}>
      <img
        src={detailedCountry.flags.png}
        alt={`Flag of ${detailedCountry.name.common}`}
        className={classes.flag}
      />
      <div className={classes.countryInfo}>
        <h1>{detailedCountry.name.official}</h1>
        <div className={classes.detailInfo}>
          <div className={classes.detail1}>
            <p>
              Native Name: <span>{nativeName || "None"}</span>
            </p>
            <p>
              Population:{" "}
              <span>
                {new Intl.NumberFormat("en-AU").format(
                  detailedCountry.population
                )}
              </span>
            </p>
            <p>
              Region: <span>{detailedCountry.region}</span>
            </p>
            <p>
              Sub Region: <span>{detailedCountry.subregion || "None"}</span>
            </p>
            <p>
              Capital: <span>{detailedCountry.capital || "None"}</span>
            </p>
          </div>
          <div className={classes.detail2}>
            <p>
              Top Level Domain: <span>{detailedCountry.tld[0]}</span>
            </p>
            <p>
              Currencies: <span>{currencies.join(", ") || "None"}</span>
            </p>
            <p>
              Languages: <span>{languages.join(", ") || "None"}</span>
            </p>
          </div>
        </div>
        <div className={classes.borderCountries}>
          <p>Border Countries:</p>
          {detailedCountry.borders && (
            <BorderCountries borders={detailedCountry.borders} />
          )}
          {!detailedCountry.borders && <span>None</span>}
        </div>
      </div>
    </div>
  );
};

export default CountryDetailItem;
