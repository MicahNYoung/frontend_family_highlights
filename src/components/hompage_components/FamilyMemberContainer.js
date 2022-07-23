import React, { useEffect, useState } from "react";
import FamilyMemberCard from "./FamilyMemberCard";

export function FamilyMemberContainer({ familyMember, searchInput, family }) {
  const [familyMemberElements, setFamilyMemberElements] = useState(null);
  const [famMemElementsData, setFamMemElementsData] = useState(null);

  useEffect(() => {
    if (family && searchInput !== "") {
      let filteredFamMemElementsData = family.filter((famMem) => {
        return (
          famMem.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
          famMem.lastName.toLowerCase().includes(searchInput.toLowerCase())
        );
      });
      let famMemElementsData = filteredFamMemElementsData.map((famMem) => {
        return (
          <FamilyMemberCard
            name={famMem.firstName + " " + famMem.lastName}
            id={famMem.id}
            highlights={famMem.highlights}
          />
        );
      });
      setFamilyMemberElements(famMemElementsData);
    }
    if (family && searchInput === "") {
      let famMemElementsData = family.map((famMem) => {
        return (
          <FamilyMemberCard
            name={famMem.firstName + " " + famMem.lastName}
            id={famMem.id}
            highlights={famMem.highlights}
          />
        );
      });
      setFamilyMemberElements(famMemElementsData);
    }
  }, [family, searchInput]);

  return (
    <div>
      {familyMemberElements && (
        <div className="FamilyMember-container">{familyMemberElements}</div>
      )}
    </div>
  );
}
