import styled from 'styled-components';

export const RunDifferentialContainer = styled.div`
  background-color: white;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  justify-content: center;

  button {
    background-color: rgba(6,128,55);
  }
`

export const MessageContainer = styled.div`
  width: 100%;
`

export const FilterContainer = styled.div`
  display: flex;
  background-color: white;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  > div {
    margin: 5px;
  }
`;