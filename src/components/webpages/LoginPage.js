import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import bcrypt from "bcryptjs";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../Navbar";

export default function LoginPage({
  setFamilyMember,
  familyMember,
  setToken,
  page,
}) {
  const [userLoggingIn, setUserLoggingIn] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [familyMemberIdSet, setFamilyMemberIdSet] = useState(false);

  const handleChange = (event) => {
    const updatedValue =
      event.target.id === "username"
        ? { username: event.target.value }
        : { password: event.target.value };
    setUserLoggingIn((userLoggingIn) => ({
      ...userLoggingIn,
      ...updatedValue,
    }));
  };

  const fetchFamilyMember = (e) => {
    e.preventDefault();
    fetch(
      "http://localhost:8080/familymember/get?username=" +
        userLoggingIn.username
    )
      .then((response) => response.json())
      .then((data) => {
        setFamilyMember(data);
      });
  };

  useEffect(() => {
    if (familyMember) {
      const passwordCheck = bcrypt.compareSync(
        userLoggingIn.password,
        familyMember.password
      );

      setToken(familyMember.id);
      if (passwordCheck) {
        setFamilyMemberIdSet(true);
      }
    }
  }, [familyMember]);

  useEffect(() => {
    if (familyMemberIdSet === true) {
      setTimeout(() => {
        navigate({
          pathname: "/homepage",
        });
      }, 100);
    }
  }, [familyMemberIdSet]);

  const handleNewUser = (e) => {
    navigate({
      pathname: "/createuser",
    });
  };
  return (
    <div>
      <Navbar page={page} />
      <Container>
        <h1>Login</h1>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <form className="FamilyMember-form">
            <TextField
              required
              id="username"
              label="Username"
              value={userLoggingIn.username}
              onChange={handleChange}
            />
            <TextField
              required
              id="password"
              label="Password"
              type="password"
              placeholder="Your password"
              value={userLoggingIn.password}
              onChange={handleChange}
            />

            <Button variant="contained" onClick={fetchFamilyMember}>
              Login
            </Button>
            <Button onClick={handleNewUser}>New User?</Button>
          </form>
        </Box>
      </Container>
    </div>
  );
}
