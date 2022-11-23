import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function AdminMenu() {
  return(
    <AdminMenuContainer>
      <Link to="/admin/picks">Picks</Link>
      <Link to="/admin/players">Players</Link>
      <Link to="/admin/eliminate">Eliminate</Link>
    </AdminMenuContainer>
  )
}

const AdminMenuContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
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
