import styled from 'styled-components';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column'
};

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`


export const ModalButton = styled(Button)`
  color: white !important;
`

export const ModalCloseButton = styled(Button)`
color: rgba(6,128,55) !important;

`

export const ModalBox = styled(Box)`
  display: flex;
`