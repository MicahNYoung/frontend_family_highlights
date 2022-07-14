import React, { useEffect, useRef } from "react"
import { useSearchParams } from "react-router-dom"
import FamilyMemberCard from "./FamilyMemberCard"

export function FamilyMemberContainer({famMember}){


  const [family, setFamily] = React.useState(null)
  const [familyMemberElements, setFamilyMemberElements] = React.useState(null)
  // let familyMemberElements = useRef([]);

  console.log("render ==========================================================================      New RENDER")
    console.log(famMember)

  useEffect(() => {
    console.log(famMember)
    if(famMember){
      fetch("http://localhost:8080/familymember/getfamily/" + famMember.id)
      .then(response => {
        console.log(response)
        return response.json();
      }) 
      .then(data => {
        console.log(data)
        setFamily(data)
      })
    }
    
  },[famMember])
   
  //family was coming back null
    
      useEffect(() => {
        if(family!== null){
          let famMemElementsData = family.map((famMem) => {
            return <FamilyMemberCard 
                    name={famMem.firstName + famMem.lastName}/>
          })
          setFamilyMemberElements(famMemElementsData)
        }
        

      },[family])
    
    console.log("familyMemberElements: " + familyMemberElements)
    return (   
        <div>
          {familyMemberElements && famMember && <div className="FamilyMember-container">{familyMemberElements}</div>}
          <p>Hello from the familyMemberContainer</p>
        </div>

    )
}
