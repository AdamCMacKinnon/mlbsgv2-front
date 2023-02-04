import styled from 'styled-components';

export const PlayersListContainer = styled.table`
  margin: 0 auto;
  background-color: white;
  width: 100%;
  padding: 5px;

  th {
    border-bottom: 1px solid;
    text-align: center;
  }
  td {
    height: 20px;
  }
  tbody tr:nth-child(odd) {
    background-color: lightgrey;

    :hover {
      background-color: green;
      color: white;
    }
  }
  tbody tr:hover {
    color: white;
    background-color: green;
  }
`