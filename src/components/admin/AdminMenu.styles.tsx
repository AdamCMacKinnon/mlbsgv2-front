import styled from 'styled-components';

export const AdminMenuContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
  justify-content:center;
  text-transform: uppercase;

  a {
    color: green;
    padding: 10px;
    text-decoration: none;
  }
  a:hover {
    color: white;
  }
`;

export const AdminContent = styled.div`
margin-top: 20px;
`