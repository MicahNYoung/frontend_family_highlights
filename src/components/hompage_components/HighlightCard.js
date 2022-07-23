import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function HighlightCard({
  displayHighlightModalOpen,
  setDisplayHighlightModalOpen,
  description,
  date,
  imageURL,
  name,
  highlightId,
}) {
  const [addHighlightsOpen, setAddHighlightsOpen] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/highlight/delete/" + highlightId, {
      method: "DELETE",
    });
    toggleDisplayOpen();
  };

  const toggleDisplayOpen = () => {
    displayHighlightModalOpen
      ? setDisplayHighlightModalOpen(false)
      : setDisplayHighlightModalOpen(true);
  };

  return (
    <Box
      className="FamilyMember-card"
      sx={{
        width: 800,
        height: 200,
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <h2>Highlight: {description} </h2>

      <h2>Date: {date} </h2>
      <Button className="trashCanButton" onClick={handleDelete}>
        <FaTrashAlt size={42} color={"black"} />
      </Button>
    </Box>
  );
}
