import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { CreateUser } from "./components/webpages/CreateUser";
import { HomePage } from "./components/webpages/HomePage";
import LoginPage from "./components/webpages/LoginPage";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken;
}
function App() {
  const [page, setPage] = useState("");
  const token = getToken();
  console.log("token is " + token);
  const [familyMember, setFamilyMember] = useState();
  console.log("familyMember is " + familyMember);
  return (
    <Routes>
      <Route
        path="/homepage"
        element={
          !token ? (
            <Navigate replace to="/" />
          ) : (
            <HomePage familyMember={familyMember} page="home" token={token} />
          )
        }
      />
      <Route
        path="/createuser"
        element={<CreateUser isNotLoginPage={true} page="createuser" />}
      />
      <Route
        path="/"
        element={
          <LoginPage
            path="/"
            familyMember={familyMember}
            setFamilyMember={setFamilyMember}
            page="login"
            setToken={setToken}
          />
        }
      />
    </Routes>
  );
}

export default App;
