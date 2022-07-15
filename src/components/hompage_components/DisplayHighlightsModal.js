import React , {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import HighlightCard from './HighlightCard';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: '75%',
  overflowY: "auto",
};

export function DisplayHighlightsModal({displayHighlightModalOpen, handleDisplayOpen, handleDisplayClose, familyMemberId, name}) {
  const [highlights, setHighlights] = React.useState([]);
  const [highlightElements, setHighlightElements] = useState([]);
  const fetchFamilyMemberHighlights = (e) => {
    fetch("http://localhost:8080/familymember/gethighlights/" + familyMemberId)
    .then(response=> response.json())
    .then((data) => setHighlights(data))
  }
  
  useEffect(() => {
    fetchFamilyMemberHighlights();
    console.log(highlights)
  }, [displayHighlightModalOpen])

  useEffect(() => {
    if(highlights.length > 0){
      let highlightElementsData = highlights.map((highlight) => {
        return <HighlightCard
                  description={highlight.description}
                  date = {highlight.date}
                  imageURL = {highlight.imageURL}
                  name={name}
              />
      })
      setHighlightElements([highlightElementsData])

    }
  }, [highlights])
  
  
  return (
    <div>
      <Button id="displayModalTitle" onClick={handleDisplayOpen}>Display Highlights</Button>
      <Modal 
      
        open={displayHighlightModalOpen}
        onClose={handleDisplayClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h1>Highlights for: {name}</h1>
          <div className="highlightsContainer">
          {highlightElements}

            </div>
        </Box>
      </Modal>
    </div>
  );
}