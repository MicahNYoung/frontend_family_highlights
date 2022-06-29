import React from "react"
import FamilyMemberContainer from "./FamilyMembersContainer"
import Navbar from "../Navbar"

export function HomePage(){
    
    return (
        <div>
            <Navbar/>
            <FamilyMemberContainer/>
        </div>
    )
}