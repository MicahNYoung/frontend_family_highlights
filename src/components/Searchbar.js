import TextField from "@mui/material/TextField";
import React from "react";

export function Searchbar({ setSearchInput }) {
  return (
    <TextField
      id="outlined-basic"
      label="Search..."
      variant="outlined"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      label="Search"
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
}
