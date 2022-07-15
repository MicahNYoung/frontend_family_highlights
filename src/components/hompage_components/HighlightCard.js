import * as React from 'react';
import Box from '@mui/material/Box';
import UserPage from "./FamilyMemberContainer"
import { AddHighlightModal } from './AddHighlightModal';
import { DisplayHighlightsModal } from './DisplayHighlightsModal';


export default function HighlightCard({description, date, imageURL, name}) {
  const [addHighlightsOpen, setAddHighlightsOpen] = React.useState(false);
    const handleOpen = () => setAddHighlightsOpen(true);
    const handleClose = () => setAddHighlightsOpen(false);

    const [displayHighlightModalOpen, setDisplayHighlightModalOpen] = React.useState(false);
    const handleDisplayOpen = () => {
      console.log("Open")
      setDisplayHighlightModalOpen(true);
    }
    const handleDisplayClose = () => {
      console.log("Closed")

      setDisplayHighlightModalOpen(false);
    }
  return (
    <Box
    className="FamilyMember-card"
      
      sx={{
        width: 800,
        height: 100,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
    
        },
      }}>
          
          <h2>Highlight: {description} </h2>
          <h2>{date} </h2>
          
      </Box>
    
  );
}