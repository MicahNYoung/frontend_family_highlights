import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js"
import FamilyMember from "./components//webpages/CreateUser"
import { Login } from '@mui/icons-material';
import LoginPage from "./components/webpages/LoginPage"
import {FamilyMemberContainer} from "./components/hompage_components/FamilyMemberContainer"
import {Link} from "react-router-dom";
import React, {useState} from "react";
import { HomePage } from './components/webpages/HomePage';
import { CreateUser } from './components/webpages/CreateUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const [familyMember, setFamilyMember] = useState();


  return (
<BrowserRouter>
    <Routes>

      <Route path="/" element={<LoginPage familyMember={familyMember} setFamilyMember={setFamilyMember} isNotLoginPage={false}/>} />
      <Route path="createuser" element={<CreateUser isNotLoginPage={true}/>}  />
      {/* <Route path="/familymembers" element={<FamilyMemberContainer/>} /> */}
      
      <Route path="/homepage" element={<HomePage familyMember={familyMember} isNotLoginPage={true}/>} />


    </Routes>
  </BrowserRouter>
  );
}

export default App;


