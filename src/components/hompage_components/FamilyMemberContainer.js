import React, { useEffect } from "react"
import FamilyMemberCard from "./FamilyMemberCard"

export function FamilyMemberContainer(){
  // const [email, setEmail] = React.useState("")
  // const [firstName, setFirstName] = React.useState("");
  // const [lastName, setLastName] = React.useState("");
  // const [username, setUsername] = React.useState("");
  // const [password, setPassword] = React.useState("");
  // const [momFirstName, setMomFirstName] = React.useState("");
  // const [momLastName, setMomLastName] = React.useState("");
  // const [dadLastName, setDadLastName] = React.useState("");
  // const [dadFirstName, setDadFirstName] = React.useState("");
  // const [familyId, setFamilyId] = React.useState("");
  // const [familyName, setFamilyName] = React.useState("");
  // const [needFamilyId, setNeedFamilyId] = React.useState(false);

  const [familyMember, setFamilyMember] = React.useState(null)
  const [family, setFamily] = React.useState(null)
  let familyMemberElements = null;

  // const familyMember = {email,firstName,lastName, username, password, momFirstName, momLastName, dadFirstName, dadLastName, familyId, familyName}
        // console.log("This is a familyMember: " + familyMember)
  // fetch('http://localhost:8080/familymember/getfamily?familyId=' +familyMember.familyId)

  useEffect(() => {
    fetch("http://localhost:8080/familymember/getfamily/2950398d-a422-45a1-a3dc-f7a715bb139e")
      .then(response => {
        console.log(response)
        return response.json();
      })
      .then(data => {
        console.log(data)
        setFamily(data)
      })
  }, [])
   
  //family was coming back null
    if(family) {
      console.log("family is not null")
      console.log(family)
      familyMemberElements = family.map((familyMem) => {
        return <FamilyMemberCard 
                name={familyMem.firstName + familyMem.lastName}/>
      })
    } 
    console.log("familyMemberElements: " + familyMemberElements)
    return (   
        //  <div className="FamilyMember-container">{cardElements}</div>\
        <div>
         {familyMemberElements && <div className="FamilyMember-container">{familyMemberElements}</div>}

        </div>

    )
}