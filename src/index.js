import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {FamilyMemberContainer} from './components/hompage_components/FamilyMemberContainer'
import LoginPage from "./components/webpages/LoginPage"
import CreateUser from "./components/webpages/CreateUser"
import { HomePage } from './components/webpages/HomePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>

      <Route path="login" element={<LoginPage/>} />
      <Route path="createuser" element={<CreateUser/>} />
      <Route path="/" element={<App/>} />
      <Route path="/familymembers" element={<FamilyMemberContainer/>} />
      
      <Route path="/homepage/:familyId" element={<HomePage/>} />


    </Routes>
  </BrowserRouter>
    
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
