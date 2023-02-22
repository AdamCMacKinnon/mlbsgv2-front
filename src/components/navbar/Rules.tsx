import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { ModalContainer, ModalButton, } from './LeaderBoardModal.styles';
import { style } from './Rules.styles'


const Rules = (props: any) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ModalContainer>
      <ModalButton onClick={handleOpen}>Rules</ModalButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          MLBSG Rules and How to Play:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <i>The idea of the game is simple. For each week of the season, pick an MLB team. If they outscore their combined opponents at the end of the week, you advance! If they don’t, you’re eliminated. Of course there’s more to it than that, so here’s a rundown on the rules….</i>
          <ol>
            <li>Only one account per person. Users found to be using multiple accounts will be disqualified and subject to further bans from the game.</li>
            <li>The scoring period runs from the start of the first game of the day on Monday, and ends at the conclusion of the last game on Sunday. </li>
            <li>All user picks must be submitted before the start of the next scoring period. A player can only pick one time, and once a pick is made it cannot be changed.</li>
            <li>Users can only select a team once during the season. So, for example, if you select the Yankees in week 1, you can no longer select the Yankees as long as you are still active.</li>
            <li>Active users are ranked by their “run differential”, or the combined difference between the teams they have thus far selected and their opponents. They may still register on the leaderboard if their run differential qualifies, but they are ineligible to win.</li>
            <li>A user is considered “active” until:
              <ol type="a">
                <li>The team they selected is outscored by their opponents</li>
                <li>The team they selected scores the same as their opponents</li>
                <li>No team is selected for that week.
                  <ol type="i">
                    <li>At which point the player will be switched to “inactive” status</li>
                  </ol>
                </li>
              </ol>
            </li>
            <li>Once a user is “inactive” then they can no longer make picks, and their run differential stops accumulating. </li>
            <li>In the event of site difficulties that delays/inhibits users to make a pick, Admins have the discretion to decide whether or not to enter those picks.</li>
            <li>Any picks not submitted via the game page will be considered ineligible unless specified otherwise by an admin.</li>
          </ol>













<i>Admins can be reached via the “support” form in the top bar of the page. We’re actual people, so feel free to message us if you have any questions or problems!! </i>
          </Typography>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </ModalContainer>
  );
}

export default Rules;