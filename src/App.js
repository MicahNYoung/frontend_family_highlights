import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js"
import FamilyMember from "./components//webpages/CreateUser"
import { Login } from '@mui/icons-material';
import LoginPage from "./components/webpages/LoginPage"
import {FamilyMemberContainer} from "./components/hompage_components/FamilyMemberContainer"
import {Link} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <LoginPage/>
      <Link to="/FamilyMemberContainer">Family Members</Link>
      {/* <Navbar/>
      <FamilyMember/>
      <LoginPage/>
      <FamilyMemberContainer/> */}
    </div>
  );
}

export default App;
