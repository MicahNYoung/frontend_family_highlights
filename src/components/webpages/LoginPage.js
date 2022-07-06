import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';


export default function FormPropsTextFields() {
    const [email, setEmail] = React.useState("")
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [momFirstName, setMomFirstName] = React.useState("");
    const [momLastName, setMomLastName] = React.useState("");
    const [dadLastName, setDadLastName] = React.useState("");
    const [dadFirstName, setDadFirstName] = React.useState("");
    const [familyId, setFamilyId] = React.useState("");
    const [familyName, setFamilyName] = React.useState("");
    const [familyMember, setFamilyMember] = React.useState("")
    const [needFamilyId, setNeedFamilyId] = React.useState(false);
    const [userLoggingIn, setUserLoggingIn] = React.useState({username:"", password:"" });
  
    const navigate = useNavigate();

    const handleClick =(e) =>{
        e.preventDefault()
        console.log(userLoggingIn.username)
        fetch("http://localhost:8080/familymember/get?username=" + userLoggingIn.username)
      .then(response => {
        console.log(response)
        return response.json();
      })
      .then(data => {
        console.log("Family member is " + familyMember.firstName )
        setFamilyMember(data)
      })
        navigate('/homepage')
        }
       
    const handleNewFamily =(e)=>{
      setNeedFamilyId(true);
      console.log(needFamilyId);
    }
    return (
      <Container >
          <h1>Login</h1>
          <Box 
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <form className="FamilyMember-form">

        <TextField
        required
          id="outlined-required"
          label="Username"
          // value={username}
          onChange={(e) => setUserLoggingIn(e.target.value)}

        />
         <TextField
         required
          id="outlined-password-input"
          label="Password"
          type="password"
          placeholder="Your password"
        //   value={password}
        //   onChange={(e) => setPassword(e.target.value)}

          />
        

        
        <Button variant="contained" onClick={handleClick}>Login</Button>
        <Button onClick={handleNewFamily}>New User?</Button>
      </form>
    </Box>
    </Container>
    
  );
}
