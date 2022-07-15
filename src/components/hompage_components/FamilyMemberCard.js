import * as React from 'react';
import Box from '@mui/material/Box';
import UserPage from "./FamilyMemberContainer"
import { AddHighlightModal } from './AddHighlightModal';
import { DisplayHighlightsModal } from './DisplayHighlightsModal';


export default function FamilyMemberCard({name, id}) {
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
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
    
        },
      }}>
        
          <h2>{name} </h2>
          <AddHighlightModal 
                addHighlightsOpen={addHighlightsOpen}
                setAddHighlightsOpen={setAddHighlightsOpen}
                handleOpen={handleOpen}
                handleClose={handleClose} 
                familyMemberId={id}/>
          <DisplayHighlightsModal
            displayHighlightModalOpen={displayHighlightModalOpen}
            setDisplayHighlightModalOpen={setDisplayHighlightModalOpen}
            handleDisplayOpen={handleDisplayOpen}
            handleDisplayClose={handleDisplayClose} 
            name={name}
            familyMemberId={id}/>
      </Box>
    
  );
}
