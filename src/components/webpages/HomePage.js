import React, {useSearchParams} from "react"
import {FamilyMemberContainer} from "../hompage_components/FamilyMemberContainer"
import Navbar from "../Navbar"
import {AddHighlightModal} from "../hompage_components/AddHighlightModal"

export function HomePage({familyMember, isNotLoginPage}){
    const [familyMemberId, setFamilyMemberId] = React.useState()
    const [familyId, setFamilyId] = React.useState()  
    

    return (
        <div>
            <Navbar isNotLoginPage={isNotLoginPage}/>
            <FamilyMemberContainer famMember={familyMember}/>

        </div>
    )
}