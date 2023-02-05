import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { style, ModalContainer } from './LoginMoreInfoModal.styles';


const LoginMoreInfoModal = (props: any) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ModalContainer>
      <Button onClick={handleOpen}>More Info</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            More Info
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Selecting "Stay logged in for an hour" will enable the app to store your user id on the browser to avoid having to log in every time the app is reloaded.  The only information that is stored is a user Id that is used to access the account and no personal information.
          </Typography>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </ModalContainer>
  );
}

export default LoginMoreInfoModal;