import { TextField } from "@material-ui/core";
import React from "react";

export const Input = React.forwardRef((props, ref) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      innerRef={ref}
      {...props}
    />
  );
});
