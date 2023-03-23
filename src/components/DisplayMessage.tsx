import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

export default function DisplayMessage(props: any) {
  
  const { response, successMessage, open, setOpen } = props;

  let displayMessage = '';

  if (typeof response.status == 'number') {
    if (response.status === 200 || response.status === 201){
       displayMessage = successMessage;
    } else {
      displayMessage = response.data.message;
    }   
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
