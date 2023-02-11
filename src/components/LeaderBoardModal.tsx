import { useState } from 'react';

//Components
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import LeaderBoard from './LeaderBoard';

//Styles
import { style, ModalContainer, ModalButton, ModalCloseButton} from './LeaderBoardModal.styles';



const LeaderBoardModal = (props: any) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ModalContainer>
      <ModalButton onClick={handleOpen}>Full Standings</ModalButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <LeaderBoard />
          <ModalCloseButton onClick={handleClose}>Close</ModalCloseButton>
        </Box>
      </Modal>
    </ModalContainer>
  );
}

export default LeaderBoardModal;