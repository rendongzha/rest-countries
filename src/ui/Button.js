import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${classes.btn} ${props.className}`}
      onClick={props.onClick}
      title={props.title}
    >
      {props.children}
    </button>
  );
};

export default Button;
