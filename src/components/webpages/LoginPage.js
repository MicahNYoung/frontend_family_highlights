import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import Button from '@mui/material/Button';


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
    const [needFamilyId, setNeedFamilyId] = React.useState(false);

    const handleClick =(e) =>{
        e.preventDefault()
        const familyMember = {email,firstName,lastName, username, password, momFirstName, momLastName, dadFirstName, dadLastName, familyId, familyName}
        console.log(familyMember)
        fetch("http://localhost:8080/familymember/add?familyId=" +familyMember.familyId,{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(familyMember)

        }).then(() => {
            console.log("New Family Member added");
        })
        }
       
    const handleNewFamily =(e)=>{
      setNeedFamilyId(true);
      console.log(needFamilyId);
    }
    return (
      <Container className="FamilyMember-form">
          <h1>Login</h1>
          <Box 
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>

        <TextField
        required
          id="outlined-required"
          label="Username"
        //   value={username}
        //   onChange={(e) => setUsername(e.target.value)}

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
        

      </div>
      <Button variant="contained" onClick={handleClick}>Login</Button>
      <Button onClick={handleNewFamily}>New User?</Button>

    </Box>
    </Container>
    
  );
}
