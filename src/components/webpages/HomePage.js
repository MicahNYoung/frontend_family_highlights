import React, { useEffect, useState } from "react";
import { FamilyCode } from "../FamilyCode";
import { FamilyMemberContainer } from "../hompage_components/FamilyMemberContainer";
import Navbar from "../Navbar";

export function HomePage({ familyMember, page }) {
  const [searchInput, setSearchInput] = useState("");
  const token = sessionStorage.getItem("token");
  const [family, setFamily] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/familymember/getfamily/" + token)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFamily(data);
      });
  }, [familyMember, token]);

  return (
    <div>
      <Navbar page={page} setSearchInput={setSearchInput} />
      <FamilyCode />
      <FamilyMemberContainer
        familyMember={familyMember}
        searchInput={searchInput}
        family={family}
      />
    </div>
  );
}
