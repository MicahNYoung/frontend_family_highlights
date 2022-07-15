import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container } from '@mui/system';
import TextField from '@mui/material/TextField';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function AddHighlightModal({addHighlightsOpen, handleOpen, handleClose, familyMemberId}) {
  const [description, setDescription] = useState("");
  const [date, setDate] = React.useState(new Date());

  const [imageURL, setImageURL] = useState("")

  const handleClick =(e) =>{
    e.preventDefault()
    const highlight = {description, date, imageURL}

    fetch("http://localhost:8080/highlight/add/" + familyMemberId,{
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(highlight)

    }).then(() => {
        console.log("New Highlight added for: " + familyMemberId);
    })
    }

  return (
    <div>
      <Button  id="addModalTitle" onClick={handleOpen}>Add Highlight</Button>
      <Modal
        open={addHighlightsOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Container className="FamilyMember-form">
          <h1>New Highlight</h1>
          <Box 
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          required
          id="outlined-required"
          label="Highlight"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
       {/* <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          renderInput={(params) => <TextField {...params} />}
        />  */}
        <TextField
          required
          id="outlined-required"
          label="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        
 
      
          
        </div>

   
      <Button variant="contained" onClick={handleClick}>Add Highlight</Button>

    </Box>
    </Container>
        </Box>
      </Modal>
    </div>
  );
}