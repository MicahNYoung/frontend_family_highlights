import * as React from 'react';
import Box from '@mui/material/Box';
import FamilyMemberContainer from "./FamilyMembersContainer"


export default function BoxSx(props) {
    
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
          <h2>{props.name} </h2>
      </Box>
    
  );
}
