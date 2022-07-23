import Typography from "@mui/material/Typography";
import React, { useState } from "react";

export function FamilyCode() {
  const token = parseInt(sessionStorage.getItem("token"));
  const [familyCode, setFamilyCode] = useState();

  console.log(typeof token);

  fetch("http://localhost:8080/family/get?familyMemberId=" + token)
    .then((response) => response.text())
    .then((data) => {
      setFamilyCode(data);
    });
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{
        color: "#1565c0",
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
      }}
    >
      <p>Family Code: {familyCode}</p>
    </Typography>
  );
}
