import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    "& .Mui-error": {
      fontFamily: "Lato",
      fontSize: "14px",
    },
    "& .MuiFormHelperText-root": {
      fontFamily: "Lato",
      fontSize: "12px",
      lineHeight: "1em",
      marginTop: "3px",
      marginLeft: "5px",
    },
    "& .MuiFormLabel-root": {
      fontFamily: "Lato",
      fontSize: "14px",
    },
    "& .MuiInputBase-input": {
      height: "1em",
    },
    width: "378px",
    height: "47px",
    padding: "0",
  },
  input: {
    fontFamily: "Lato",
    fontSize: "14px",
  },
});

export const InputBig = (props) => {
  const classes = useStyles();
  const { name, label, value, error = null, onChange, onBlur } = props;
  console.log("Input -> error", error);
  return (
    <TextField
      className={classes.root}
      InputProps={{
        className: classes.input,
      }}
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
    />
  );
};
