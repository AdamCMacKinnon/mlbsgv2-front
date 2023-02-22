import styled from 'styled-components';

export const PlayerInfoSection = styled.div`
  width: 100%;
  padding: 20px;
  background-color: lightcyan;
  color:rgb(6, 128, 55);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 300px;
  position: relative;

  .tag {
    margin-top: 0;
    padding: 5px 20px;
    border-radius: 5px;
    color: white;
  }

  .active-tag {
    background-color: rgb(6, 128, 55);
  }

  .inactive-tag {
    background-color: grey;
  }

  ul {
    list-style-type: none;
    text-align: left;
  }
`

export const PlayerInfoContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`