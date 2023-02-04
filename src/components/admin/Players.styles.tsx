import styled from 'styled-components';

export const ActionsContainer = styled.div`
  background-color: white;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 5px;
  border-radius: 5px;

  button {
    background-color: rgba(6,128,55);
  }
`

export const ActionsContainerBottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px 5px 10px;
  width: 100%;

  button {
    margin: 0 5px;
  }
`