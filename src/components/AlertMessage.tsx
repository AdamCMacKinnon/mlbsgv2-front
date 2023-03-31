import Alert from '@mui/material/Alert';

const AlertMessage = (props: any) => {
  const {open, severity, message} = props;

  return (
    <>
      {
        open && <Alert severity={severity}>{message}</Alert>
      }
    </>
    
  )
}

export default AlertMessage;