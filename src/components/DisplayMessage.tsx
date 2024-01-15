import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

export default function DisplayMessage(props: any) {
  
  const { response, open, setOpen } = props;

  let displayMessage = '';

  switch (response.status) {
    case 200:
    case 201:
      displayMessage = 'SUCCESS!';
      break;
    case 404:
      displayMessage = 'Resource Not Found.  Try again!'
      break;
    case 500:
      displayMessage = 'There is a Server error.  Contact Support or try again later!'
      break;
    case 409:
      displayMessage = 'It looks like what you entered already exists.  Choose another Value'
      break;
    case 401:
      displayMessage = 'The Credentials entered do not match or you are not authorized to view this page.'
      break;
    default:
      displayMessage = 'Unknown Error Code.  Please Try Again or Contact Support';
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          severity={
            response.status === 200 || response.status === 201
              ? "success"
              : "error"
          }
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {displayMessage}
        </Alert>
      </Collapse>
      {/* <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-open
      </Button> */}
    </Box>
  );
}
