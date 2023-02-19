import { useState } from 'react';

//Components
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

//Styles
import { style, ModalContainer, ModalButton, ModalCloseButton} from './LeaderBoardModal.styles';
import IssueTrackerForm from './IssueTrackerForm';



const IssueTrackerFormModal = (props: any) => {
  const [open, setOpen] = useState(false);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setTicketSubmitted(false);
  };

  const {user} = props;

  return (
    <ModalContainer>
      <ModalButton onClick={handleOpen}>Report Issue</ModalButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {ticketSubmitted ? (
            <p>Thank you for submitting a ticket.  You issue will be addressed</p>
          ): (<IssueTrackerForm user={user} setTicketSubmitted={setTicketSubmitted}/>)}
          
          <ModalCloseButton onClick={handleClose}>Close</ModalCloseButton>
        </Box>
      </Modal>
    </ModalContainer>
  );
}

export default IssueTrackerFormModal;