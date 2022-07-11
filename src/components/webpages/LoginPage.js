import React, {useEffect, useState} from 'react';
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
    const [familyName, setFamilyName] = React.useState("");
    const [familyMember, setFamilyMember] = React.useState({})
    const [needFamilyId, setNeedFamilyId] = React.useState(false);
    const [userLoggingIn, setUserLoggingIn] = React.useState({username:"", password:"" });
    const [testState, setTestState] = React.useState("")
    const navigate = useNavigate();

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

    // function getValues(){
    //   return fetch("http://localhost:8080/familymember/get?username=" + userLoggingIn.username)
    //   .then(response=> response.json())
    //   .then(data => {
    //     console.log(data)
    //     familyMemberId = data.id;
    //     console.log("familyMemberId is " + familyMemberId)
    //     return fetch("http://localhost:8080/family?familyMemberId=" + familyMemberId);
    //   })
    //   .then(familyResponse => familyResponse.text())
    //   .then(data => {
    //     setFamilyId(data);
    //     console.log(familyId)
    //     // return familyId;
    //     // console.log(familyId)
    //   });
      
    // }


    // React.useEffect(() => {
    //   setTimeout(1000)
    //   fetch("http://localhost:8080/familymember/get?username=" + userLoggingIn.username)
    //   .then(response=> response.json())
    //   .then(data => {
    //     console.log(data)
    //     // familyMemberId = data.id;
    //     setFamilyMemberId(prevState =>({...prevState, id:data.id}));
    //     console.log("familyMemberId is " + familyMemberId.id)
    //     return fetch("http://localhost:8080/family?familyMemberId=" + familyMemberId.id);
    //   })
    //   .then(familyResponse => familyResponse.text())
    //   .then((data) => {
    //     console.log("data being returned from /family?familyMemberId= is "+  data)
    //     // familyId = data;
    //     setFamilyId(prevState =>({...prevState, id:data}));
    //     // return familyId;
    //     // console.log("familyId is ::::::::::::::::::" + familyId.id)
    //     // return familyId;
    //     // console.log(familyId)
    //   });
      
      
    
    //   console.log("familyMemberId is ======= " + familyMemberId.id)
    //   console.log("familyId is ==========" + familyId.id);
      
    // },[testState, familyId, familyMemberId])
  
    const fetchFamilyId = (e) => {
      e.preventDefault()

      fetch("http://localhost:8080/familymember/get?username=" + userLoggingIn.username)
      .then(response=> response.json())
      .then((data) => {
        // console.log(data)
        // familyMemberId = data.id;
        // if(familyMemberId){
          setFamilyMemberId(data.id);

          setFamilyMemberIdSet(true)
        // }
        // console.log("useEffect 1 count: and " + familyMemberId);

        // return fetch("http://localhost:8080/family?familyMemberId=" + familyMemberId.id);
      })
    }
    // React.useEffect(() => {
    //   let counter = 0;

    //   fetch("http://localhost:8080/familymember/get?username=" + userLoggingIn.username)
    //   .then(response=> response.json())
    //   .then(data => {
    //     console.log(data)
    //     // familyMemberId = data.id;
    //     // if(familyMemberId){
    //       setFamilyMemberId(data.id);
    //     // }
    //     console.log("useEffect 1 count: " + counter + "and " + familyMemberId);

    //     // return fetch("http://localhost:8080/family?familyMemberId=" + familyMemberId.id);
    //   })
    // },[testState])

    // React.useEffect(() => {
    //   let counter = 0;
    //   fetch("http://localhost:8080/family?familyMemberId=" + familyMemberId)
    //   .then(familyResponse => familyResponse.text())
    //   .then(data => {
    //     console.log("data being returned from /family?familyMemberId= is "+  data)
    //     // familyId = data;
    //     setFamilyId(data);
    //     console.log("useEffect 2 count: " + counter + "and "  + familyId);
    //   })
    // }, [familyMemberId])

    
    // console.log("familyMemberId is: &&&&&&&&" + familyMemberId)
    //     console.log("familyId is: &&&&&&&&&&" + familyId)
       ////Cannot use useEffect for navigation because its getting twice on the two rerenders
    useEffect(() => {
      console.log("familyMemberId is: ++++++++++" + familyMemberId)
      console.log("familyId is: +++++++++++" + familyId)
      if(familyMemberIdSet === true) {
        setTimeout(() => {
          console.log("familyMemberId is: ++++++++++" + familyMemberId)
        console.log("familyId is: +++++++++++" + familyId)
          navigate({
            pathname: '/homepage',
            search: '?familyId=' + familyMemberId,
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
