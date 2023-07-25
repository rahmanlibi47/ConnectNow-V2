import React from "react";
import useStyles from "./styles"; // Import the styles

const Notes = () => {
  const classes = useStyles(); // Use the styles hook

  return (
    <div className={classes.container}>
      <div className={classes.apps}>{/* Rest of the component */}</div>
    </div>
  );
};

export default Notes;
