import React, {useSearchParams} from "react"
import {FamilyMemberContainer} from "../hompage_components/FamilyMemberContainer"
import Navbar from "../Navbar"

export function HomePage(){
    const [searchParams, setSearchParams] = useSearchParams();
    // const [familyMembers]
    fetch("http://localhost:8080/family?familyMemberId=" + familyMemberId.get('familyMemberId'))
      .then(familyResponse => familyResponse.text())
      .then(data => {
        console.log("data being returned from /family?familyMemberId= is "+  data)
        // familyId = data;
        setFamilyId(data);
        console.log("useEffect 2 count: " + counter + "and "  + familyId);
      })
    return (
        <div>
            <p>hi</p>
            <Navbar/>
            <FamilyMemberContainer/>
        </div>
    )
}