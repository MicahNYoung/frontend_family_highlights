import Box from "@mui/material/Box";
import React, { useState } from "react";
import { AddHighlightModal } from "./AddHighlightModal";
import { DisplayHighlightsModal } from "./DisplayHighlightsModal";

export default function FamilyMemberCard({ name, id }) {
  const [addHighlightsOpen, setAddHighlightsOpen] = useState(false);
  const handleOpen = () => setAddHighlightsOpen(true);
  const handleClose = () => setAddHighlightsOpen(false);

  const [displayHighlightModalOpen, setDisplayHighlightModalOpen] =
    useState(false);
  const handleDisplayOpen = () => {
    setDisplayHighlightModalOpen(true);
  };
  const handleDisplayClose = () => {
    setDisplayHighlightModalOpen(false);
  };
  return (
    <Box
      className="FamilyMember-card"
      sx={{
        width: 300,
        height: 300,
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <h2>{name} </h2>
      <AddHighlightModal
        addHighlightsOpen={addHighlightsOpen}
        setAddHighlightsOpen={setAddHighlightsOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
        familyMemberId={id}
        setAddHighlightsOpen={setAddHighlightsOpen}
        setDisplayHighlightModalOpen={setDisplayHighlightModalOpen}
      />
      <DisplayHighlightsModal
        displayHighlightModalOpen={displayHighlightModalOpen}
        setDisplayHighlightModalOpen={setDisplayHighlightModalOpen}
        handleDisplayOpen={handleDisplayOpen}
        handleDisplayClose={handleDisplayClose}
        name={name}
        familyMemberId={id}
        setDisplayHighlightModalOpen={setDisplayHighlightModalOpen}
      />
    </Box>
  );
}
