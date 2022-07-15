import React, { useEffect, useRef } from "react"
import { useSearchParams } from "react-router-dom"
import FamilyMemberCard from "./FamilyMemberCard"

export function FamilyMemberContainer({famMember}){


  const [family, setFamily] = React.useState(null)
  const [familyMemberElements, setFamilyMemberElements] = React.useState(null)
  // let familyMemberElements = useRef([]);


  useEffect(() => {
    console.log(famMember)
    if(famMember){
      fetch("http://localhost:8080/familymember/getfamily/" + famMember.id)
      .then(response => {
        return response.json();
      }) 
      .then(data => {
        setFamily(data)
      })
    }
    
  },[famMember])
   
  //family was coming back null
    
      useEffect(() => {
        if(family!== null){
          let famMemElementsData = family.map((famMem) => {
            console.log(famMem)
            return <FamilyMemberCard 
                    name={famMem.firstName + " " + famMem.lastName}
                    id={famMem.id}
                    highlights={famMem.highlights}/>
          })
          setFamilyMemberElements(famMemElementsData)
        }
        

      },[family])
    
    console.log("familyMemberElements: " + familyMemberElements)
    return (   
        <div>
          {familyMemberElements && famMember && <div className="FamilyMember-container">{familyMemberElements}</div>}
        </div>

    )
}
