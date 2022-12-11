import Typography from '@mui/material/Typography';

export default function Logout(props: any) {
  const { setToken } = props
  return (
    <Typography textAlign="center" onClick={e => setToken('')}>Logout</Typography>
  )
}