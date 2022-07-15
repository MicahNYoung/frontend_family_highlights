import React, {useEffect, useSearchParams, useState, createSearchParams} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import Navbar from '../Navbar';


export default function FormPropsTextFields({setFamilyMember, familyMember, isNotLoginPage}) {

    const [needFamilyId, setNeedFamilyId] = React.useState(false);
    const [userLoggingIn, setUserLoggingIn] = React.useState({username:"", password:"" });
    const navigate = useNavigate();
    // const [searchParams, setSearchParams] = useSearchParams();


    const [familyMemberId, setFamilyMemberId] = React.useState()
    const [familyId, setFamilyId] = React.useState()
    const [familyMemberIdSet, setFamilyMemberIdSet] = React.useState(false)

    const handleChange = event => {
      console.log(event.target.id)

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

          setFamilyMember(data);
          setFamilyMemberIdSet(true)
        
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

       
    const handleNewFamily =(e)=>{
      setNeedFamilyId(true);
      console.log(needFamilyId);
    }
    return (
      <div>
        <Navbar isNotLoginPage={isNotLoginPage}/>
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
            <Link to="/CreateUser">New User?</Link>
            <Button onClick={handleNewFamily}>New User?</Button>
          </form>
          </Box>
        </Container>
      </div>
      
    
  );
}
