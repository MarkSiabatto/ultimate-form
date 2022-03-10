import { TextField } from "@material-ui/core";
import React from "react";

export const Input = (props) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      {...props}
    />
  );
};
