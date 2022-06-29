import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js"
import FamilyMember from "./components//webpages/CreateUser"
import { Login } from '@mui/icons-material';
import LoginPage from "./components/webpages/LoginPage"
import FamilyMemberContainer from "./components/webpages/FamilyMembersContainer"

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <FamilyMember/>
      <LoginPage/>
      <FamilyMemberContainer/>
    </div>
  );
}

export default App;
