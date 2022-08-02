import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React, { useState } from "react";

const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const highlightStyle = {
  width: 500,
  maxWidth: "75%",
};

export function AddHighlightModal({
  addHighlightsOpen,
  handleOpen,
  handleClose,
  familyMemberId,
  setAddHighlightsOpen,
  setDisplayHighlightModalOpen,
}) {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);

  const [imageURL, setImageURL] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const highlight = { description, date, imageURL };

    fetch("http://localhost:8080/highlight/add/" + familyMemberId, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(highlight),
    }).then(() => {
      setAddHighlightsOpen(false);
      setDisplayHighlightModalOpen(true);
    });
  };

  return (
    <div>
      <Button id="addModalTitle" onClick={handleOpen}>
        Add Highlight
      </Button>
      <Modal
        open={addHighlightsOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container>
            <h1>New Highlight</h1>
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
                width: 500,
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  sx={{ "& .MuiTextField-root": { width: "8ch" } }}
                  // fullWidth
                  className="HighlightFormInput"
                  id="fullWidth"
                  required
                  id="outlined-required"
                  label="Highlight"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Date"
                    inputFormat="MM/dd/yyyy"
                    value={date}
                    onChange={(newDate) => setDate(newDate)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>

              <Button variant="contained" onClick={handleClick}>
                Add Highlight
              </Button>
            </Box>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
