import Card from "../ui/Card";
import classes from "./CountryItem.module.css";
import { Link } from "react-router-dom";

const CountryItem = (props) => {
  return (
    <li className={classes.listItem}>
      <Link to={props.code} className={classes.link}>
        <Card className={classes.countryCard}>
          <img
            src={props.img}
            alt={`Flag of ${props.country}`}
            className={classes.flag}
          />
          <div className={classes.intro}>
            <h3>{props.country}</h3>
            <p>
              Population:{" "}
              <span>
                {new Intl.NumberFormat("en-AU").format(props.population)}
              </span>
            </p>
            <p>
              Region: <span>{props.region}</span>
            </p>
            <p>
              Capital: <span>{props.capital || "None"}</span>
            </p>
          </div>
        </Card>
      </Link>
    </li>
  );
};

export default CountryItem;
