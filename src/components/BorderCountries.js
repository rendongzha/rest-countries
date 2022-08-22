import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import classes from "./BorderCountries.module.css";

const BorderCountries = (props) => {
  const [borderCountries, setBorderCountries] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/alpha?codes=${props.borders.join(
      ","
    )}`;

    const fetchBorderCountries = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Fetching country failed!");

        const data = await res.json();
        console.log(data);
        setBorderCountries(data);
      } catch (err) {
        console.error(err);
        alert(err);
      }
    };

    fetchBorderCountries();
  }, [props.borders]);

  if (!borderCountries) return;

  return (
    <div className={classes.borderContainer}>
      {borderCountries.map((border) => (
        <Button
          onClick={() => navigate(`../${border.cca3}`)}
          className={classes.borderBtn}
          key={border.cca3}
          title={border.name.common}
        >
          {border.name.common}
        </Button>
      ))}
    </div>
  );
};

export default BorderCountries;
