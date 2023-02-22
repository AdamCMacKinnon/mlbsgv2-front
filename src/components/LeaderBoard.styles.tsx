import styled from 'styled-components';

export const LeaderBoardContainer = styled.div`
height: 100%;
color: black;
// width: 100%;
display: flex;
flex-direction: column;
align-items: center;
// justify-content: flex-start;
max-height: 300px;
overflow: auto;

// h3 {
//   margin: 15px 0 5px;
// }
margin: 0 auto;
background-color: white;
width: 100%;

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
`;

export const LeaderBoardTableBody = styled.tbody`
  text-align: center;
`