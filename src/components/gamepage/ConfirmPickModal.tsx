import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { style } from './ConfirmPickModal.styles';

const ConfirmPickModal = (props: any) => {
  const {modalOpen, setModalOpen, handleSubmit, team, week} = props;
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const handleModalSubmit = (e: any) => {
    setModalOpen(false);
    handleSubmit(e)
  }

  return (
    <div>
      <Button variant='contained' onClick={handleOpen}>Submit</Button>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirm Pick
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Week {week} - {team.name}
          </Typography>
          <Button onClick={handleModalSubmit}>Confirm Pick</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ConfirmPickModal;