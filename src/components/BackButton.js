import Button from "../ui/Button";

import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import classes from "./BackButton.module.css";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(-1)} className={classes.btn}>
      <BsArrowLeft />
      Back
    </Button>
  );
};

export default BackButton;
