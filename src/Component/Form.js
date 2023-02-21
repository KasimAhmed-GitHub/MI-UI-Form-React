import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControlLabel,
  FormGroup,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const Form = () => {
  const [input, setinput] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
    courses:""
  });
  const handlerChange = (e) => {
    setinput((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(input);
        }}
      >
        <TextField
          name="name"
          value={input.name}
          onChange={handlerChange}
          type="name"
          placeholder="Enter Name"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
        <br />
        <TextField
          name="email"
          value={input.email}
          onChange={handlerChange}
          type="email"
          placeholder="Enter Email"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
        <br />
        <TextField
          name="password"
          value={input.password}
          onChange={handlerChange}
          type="password"
          placeholder="Enter Password"
          variant="outlined"
          sx={{ margin: "20px" }}
        />
        <br />
        <FormGroup sx={{ margin: "20px" }}>
          <FormControlLabel
            label="I Agree T&C"
            control={
              <Checkbox
                onChange={() => {
                  setinput((prevState) => ({
                    ...prevState,
                    terms: !input.terms,
                  }));
                }}
              />
            }
          />
        </FormGroup>
        <br />
        <FormControl fullWidth>
          <InputLabel id="menu">Courses</InputLabel>
          <Select label="courses"
          value={input.courses}
          onChange={handlerChange}
          name="courses">
            <MenuItem value={"mongodb"}>MongoDB</MenuItem>
            <MenuItem value={"express"}>Express</MenuItem>
            <MenuItem value={"node"}>Node</MenuItem>
            <MenuItem value={"react"}>React</MenuItem>
          </Select>

        </FormControl>
        <br/>

        <Button type="submit" variant="contained" color="success">
          Submit
        </Button>
      </form>
    </>
  );
};

export default Form;
