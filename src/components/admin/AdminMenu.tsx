import { Link } from 'react-router-dom';

//Styles
import { AdminMenuContainer } from './AdminMenu.styles';



const AdminMenu = () => {
  return(
    <AdminMenuContainer>
      <Link to="/admin/players">Players</Link>
      <Link to="runDifferential">Run Diff</Link>
    </AdminMenuContainer>
  )
}

export default AdminMenu;