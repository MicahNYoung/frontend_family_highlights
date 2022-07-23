import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import * as React from "react";

export function NewFamily({
  setFamilyName,
  needFamilyId,
  familyName,
  setFamilyId,
  familyId,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/family/add?familyName=" + familyName)
      .then((response) => response.text())
      .then((data) => {
        setFamilyId(data);
      });
  };

  return (
    <Container className="FamilyMember-form">
      <h1>New Family:</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {needFamilyId === true && (
          <TextField
            required
            id="outlined-required"
            label="Your Family Name"
            value={familyName}
            onChange={(e) => setFamilyName(e.target.value)}
          />
        )}

        <Button variant="contained" onClick={handleClick}>
          Add Family
        </Button>
      </Box>
    </Container>
  );
}
