import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';

export default function Logout(props: any) {
  const { setToken, setUser } = props;

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    setUser();
    navigate('/login');
  }
  return (
    <Typography textAlign="center" onClick={handleLogout}>Logout</Typography>
  )
}