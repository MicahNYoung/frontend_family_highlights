import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js"
import FamilyMember from "./components/FamilyMember.js"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FamilyMember/>
    </div>
  );
}

export default App;
