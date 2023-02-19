import { useState } from 'react';

//Components
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

//Styles
import { style, ModalContainer} from '../LeaderBoardModal.styles';
import ForgotPassword from './ForgotPassword';




const ForgotPasswordModal = (props: any) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ModalContainer>
      <Button onClick={handleOpen}>Forgot Password</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ForgotPassword />
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
      
    </ModalContainer>
  );
}

export default ForgotPasswordModal;