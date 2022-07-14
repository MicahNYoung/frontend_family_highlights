import React, {useEffect, useSearchParams, useState, createSearchParams} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';


export default function FormPropsTextFields({setFamilyMember, familyMember}) {
    const [email, setEmail] = React.useState("")
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [momFirstName, setMomFirstName] = React.useState("");
    const [momLastName, setMomLastName] = React.useState("");
    const [dadLastName, setDadLastName] = React.useState("");
    const [dadFirstName, setDadFirstName] = React.useState("");
    const [familyName, setFamilyName] = React.useState("");
    const [needFamilyId, setNeedFamilyId] = React.useState(false);
    const [userLoggingIn, setUserLoggingIn] = React.useState({username:"", password:"" });
    const [testState, setTestState] = React.useState("")
    const navigate = useNavigate();
    // const [searchParams, setSearchParams] = useSearchParams();


    const [familyMemberId, setFamilyMemberId] = React.useState()
    const [familyId, setFamilyId] = React.useState()
    const [familyMemberIdSet, setFamilyMemberIdSet] = React.useState(false)
    // let familyMemberId;
    // let familyId;
    const handleChange = event => {
      console.log(event.target.id)

      ////Might be better using if/else
      const updatedValue=(event.target.id === "username") ? {"username":event.target.value} : {"password":event.target.value}
      console.log(updatedValue)
        setUserLoggingIn(userLoggingIn => ({
          ...userLoggingIn,
          ...updatedValue
        }))
    }


  
    const fetchFamilyId = (e) => {
      e.preventDefault()

      fetch("http://localhost:8080/familymember/get?username=" + userLoggingIn.username)
      .then(response=> response.json())
      .then((data) => {
        // console.log(data)
        // familyMemberId = data.id;
        // if(familyMemberId){
          setFamilyMember(data);
          // console.log(familyMember)
          setFamilyMemberIdSet(true)
        // }
        // console.log("useEffect 1 count: and " + familyMemberId);

        // return fetch("http://localhost:8080/family?familyMemberId=" + familyMemberId.id);
      })
    }
       ////Cannot use useEffect for navigation because its getting twice on the two rerenders
       useEffect(() => {
      
        if(familyMemberIdSet === true) {
          setTimeout(() => {
            
            navigate({
              pathname: '/homepage'
            })
          }, 1000)
        }
        
      }, [familyMemberIdSet])
    // const handleClick =(e) =>{
       

        
    //     }
       
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
          id="username"
          label="Username"
          value={userLoggingIn.username}
          onChange={handleChange}

        />
         <TextField
         required
          id="password"
          label="Password"
          type="password"
          placeholder="Your password"
          value={userLoggingIn.password}
          onChange={handleChange}

          />
        

        
        <Button variant="contained" onClick={fetchFamilyId}>Login</Button>
        <Button onClick={handleNewFamily}>New User?</Button>
      </form>
    </Box>
    </Container>
    
  );
}
