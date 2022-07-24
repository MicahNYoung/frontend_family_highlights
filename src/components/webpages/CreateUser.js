import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import bcrypt from "bcryptjs";
import React, { useEffect, useState } from "react";
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
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [response, setResponse] = useState({ id: 0 });
  // const [errors, setErrors] = useState();

  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();
  let errors = [];

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function getEmailValidationMessage(email) {
    if (formSubmitted) {
      if (email === "") {
        // setHasError(true);
        errors.push("error");
        return "Field is blank!";
      } else if (!isValidEmail(email)) {
        return "invalid email!";
      } else return false;
    }
  }
  function getFieldValidationMessage(field) {
    if (formSubmitted) {
      if (field === "") {
        // setHasError(true);
        return "Field is blank!";
      }
    }
  }

  function getFamilyIdValidationMessage(familyId) {}

  const handleClick = (e) => {
    password = bcrypt.hashSync(password, salt);
    // e.preventDefault();
    setFormSubmitted(true);

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

    if (!hasError && familyId) {
      console.log(familyMember.familyId);
      fetch(
        "http://localhost:8080/familymember/add?familyId=" +
          familyMember.familyId,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(familyMember),
        }
      )
        .then((res) => res.text())
        .then((data) => setResponse(data));
    }
  };
  // console.log(response.status);
  useEffect(() => {
    console.log(response);
    if (response === "Created") {
      navigate({
        pathname: "/",
      });
    }
  }, [response]);
  // console.log(errors);

  const handleNewFamily = (e) => {
    setNeedFamilyId(true);
  };
  return (
    <div>
      <Navbar page={page} />
      {/* {errors && <ErrorMessage errors={errors} />} */}

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
              className="Mui-required"
              required
              id="outlined-required"
              label="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={getEmailValidationMessage(email)}
              helperText={
                getEmailValidationMessage(email)
                  ? getEmailValidationMessage(email)
                  : " "
              }
            />
            <TextField
              required
              id="outlined-required"
              label="Your First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              error={getFieldValidationMessage(firstName)}
              helperText={
                getFieldValidationMessage(firstName)
                  ? getFieldValidationMessage(firstName)
                  : " "
              }
            />
            <TextField
              required
              id="outlined-required"
              label="Your Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              error={formSubmitted && lastName === ""}
              helperText={formSubmitted && lastName === "" ? "Empty!" : " "}
            />
            <TextField
              required
              id="outlined-required"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={formSubmitted && username === ""}
              helperText={formSubmitted && username === "" ? "Empty!" : " "}
            />
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={formSubmitted && password === ""}
              helperText={formSubmitted && password === "" ? "Empty!" : " "}
            />
            <TextField
              required
              id="outlined-required"
              label="Mom's First Name"
              value={momFirstName}
              onChange={(e) => setMomFirstName(e.target.value)}
              error={formSubmitted && momFirstName === ""}
              helperText={formSubmitted && momFirstName === "" ? "Empty!" : " "}
            />

            <TextField
              required
              id="outlined-required"
              label="Mom's Last Name"
              value={momLastName}
              onChange={(e) => setMomLastName(e.target.value)}
              error={formSubmitted && momLastName === ""}
              helperText={formSubmitted && momLastName === "" ? "Empty!" : " "}
            />
            <TextField
              required
              id="outlined-required"
              label="Dad's first Name"
              value={dadFirstName}
              onChange={(e) => setDadFirstName(e.target.value)}
              error={formSubmitted && dadFirstName === ""}
              helperText={formSubmitted && dadFirstName === "" ? "Empty!" : " "}
            />
            <TextField
              required
              id="outlined-required"
              label="Dad's Last Name"
              value={dadLastName}
              onChange={(e) => setDadLastName(e.target.value)}
              error={formSubmitted && dadLastName === ""}
              helperText={formSubmitted && dadLastName === "" ? "Empty!" : " "}
            />
            <TextField
              required
              id="outlined-required"
              label="Your Family ID"
              value={familyId}
              onChange={(e) => setFamilyId(e.target.value)}
              error={formSubmitted && familyId === ""}
              helperText={formSubmitted && familyId === "" ? "Empty!" : " "}
            />
            <div>
              {needFamilyId === true && (
                <TextField
                  required
                  label="Your Family Name"
                  value={familyName}
                  onChange={(e) => setFamilyName(e.target.value)}
                  error={formSubmitted && familyName === ""}
                  helperText={
                    formSubmitted && familyName === "" ? "Empty!" : " "
                  }
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
