import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import bcrypt from "bcryptjs";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { NewFamily } from "../createuser_components/NewFamily";
import Navbar from "../Navbar";

const salt = bcrypt.genSaltSync(10);

export function CreateUser({ page }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const [momFirstName, setMomFirstName] = useState("");
  const [momLastName, setMomLastName] = useState("");
  const [dadLastName, setDadLastName] = useState("");
  const [dadFirstName, setDadFirstName] = useState("");
  const [familyId, setFamilyId] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [needFamilyId, setNeedFamilyId] = useState(false);

  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [response, setResponse] = useState();

  const navigate = useNavigate();

  const handleClick = (e) => {
    password = bcrypt.hashSync(password, salt);

    e.preventDefault();
    const familyMember = {
      email,
      firstName,
      lastName,
      username,
      password,
      momFirstName,
      momLastName,
      dadFirstName,
      dadLastName,
      familyId,
      familyName,
    };

    for (let key in familyMember) {
      if (key !== "" && allFieldsFilled === false) {
        console.log(key, allFieldsFilled);
        setAllFieldsFilled(true);
      }
    }

    if (familyMember.familyId !== "") {
      if (!allFieldsFilled) {
        fetch(
          "http://localhost:8080/familymember/add?familyId=" +
            familyMember.familyId,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(familyMember),
          }
        )
          .then((res) => res.json())
          .then((data) => setResponse(data));
        if (response.id) {
          navigate({
            pathname: "/",
          });
        }
      }
    }
  };

  const [title, setTitle] = React.useState("");

  const handleNewFamily = (e) => {
    setNeedFamilyId(true);
  };
  return (
    <div>
      <Navbar page={page} />
      {allFieldsFilled && <h2>Please fill out every field</h2>}
      <Container className="FamilyMember-form">
        <h1>New User</h1>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Your First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Your Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Mom's First Name"
              value={momFirstName}
              onChange={(e) => setMomFirstName(e.target.value)}
            />

            <TextField
              required
              id="outlined-required"
              label="Mom's Last Name"
              value={momLastName}
              onChange={(e) => setMomLastName(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Dad's first Name"
              value={dadFirstName}
              onChange={(e) => setDadFirstName(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Dad's Last Name"
              value={dadLastName}
              onChange={(e) => setDadLastName(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Your Family ID"
              value={familyId}
              onChange={(e) => setFamilyId(e.target.value)}
            />
            <div>
              {needFamilyId === true && (
                <TextField
                  required
                  label="Your Family Name"
                  value={familyName}
                  onChange={(e) => setFamilyName(e.target.value)}
                />
              )}
            </div>
          </div>
          <Button variant="contained" onClick={handleClick}>
            Add User
          </Button>
          <Button onClick={handleNewFamily}>New Family</Button>
        </Box>
        {needFamilyId && (
          <NewFamily
            setFamilyName={setFamilyName}
            needFamilyId={needFamilyId}
            familyName={familyName}
            setFamilyId={setFamilyId}
            familyId={familyId}
          />
        )}
      </Container>
    </div>
  );
}
