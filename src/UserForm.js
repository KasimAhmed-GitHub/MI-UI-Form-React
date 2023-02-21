import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const UserForm = () => {
  const [input, setinput] = useState("");

  return (
    <>
      <TextField type="text" placeholder="name"/>
      <Button >Click me</Button>
    </>
  )
}
export default UserForm
