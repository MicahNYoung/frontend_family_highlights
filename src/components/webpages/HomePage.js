import React from "react"
import {FamilyMemberContainer} from "../hompage_components/FamilyMemberContainer"
import Navbar from "../Navbar"

export function HomePage(){
    
    return (
        <div>
            <Navbar/>
            <FamilyMemberContainer/>
        </div>
    )
}