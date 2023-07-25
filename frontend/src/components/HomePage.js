import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "25%",
    marginTop: "15%",
    height: "100vh",
  },
  heading: {
    fontSize: "48px",
    fontWeight: 600,
    animation: "$fadeIn 1s ease-in-out",
    color: theme.palette.text.primary,
  },
  button: {
    marginTop: "20px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
      transform: "translateY(-20px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Welcome to ConnectNow</h1>
      <Button variant="contained" className={classes.button}>
        Get Started
      </Button>
    </div>
  );
};

export default HomePage;
