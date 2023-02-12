import {useEffect, useState} from 'react';

//Components
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

//Global functions
import { createIssueTicket } from '../functions';

//Styles
import { FormBox } from './register/RegisterForm.styles'

const issueTypeList = [
  {
    display: 'Login',
    type: 'login'
  }, 
  {
    display: 'Game Play',
    type: 'gameplay'
  },
  {
    display: 'System',
    type: 'system'
  } 
]



const IssueTrackerForm = (props: any) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [issue_type, setIssueType] = useState('');
  const [ticket_body, setTicketBody] = useState('');
  const [emailError, setEmailError] = useState('');
  const [issueTypeError, setIssueTypeError] = useState('');
  const [ticketBodyError, setTicketBodyError] = useState('');

  const {user, setTicketSubmitted} = props;

  useEffect(() => {
    if (user) {
      if (user.username) {
        setUsername(user.username)
      }
      if (user.email) {
        setEmail(user.email);
      }
      
    }
  }, [user])


  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const valid = checkFieldValues();

    const data = {
      username,
      email,
      issue_type,
      ticket_body
    }
    if (valid) {
      const createTicketResponse = await createIssueTicket(data);
      
      if (createTicketResponse.createdAt) {
        setTicketSubmitted(true);
      } 
    }
  }

  const checkFieldValues = () => {
    let isValid: boolean = true
    if (!issue_type || !ticket_body || !email) {
      setIssueTypeError('Required');
      setTicketBodyError('Required');
      setEmailError('Required');
      isValid = false
    }
    return isValid
  }

  return(
    <FormBox
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h3>Report Issue</h3>
      <TextField  
        id="outlined"
        label="User Name"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <TextField
        id="outline"
        required
        label="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        error={emailError ? true : false}
        helperText={emailError ? emailError : ''}
      />
      <FormControl fullWidth>
       <InputLabel id="filter-team-label" size="small" error={issueTypeError ? true : false}>Issue Type</InputLabel>
          <Select
            labelId="filter-team-label"
            id="filter-team"
            value={issue_type}
            label="Filter Team"
            onChange={(e: any) => setIssueType(e.target.value)}
            required
            error={issueTypeError ? true : false}
          >
            {issueTypeList.map((issue: any) => (
              <MenuItem key={issue.type} value={issue.type}>
                {issue.display}
              </MenuItem>
            ))}
          </Select>
          {issueTypeError ? (<FormHelperText error>Required</FormHelperText>) : ''}
      </FormControl>
      <TextField
        id="outlined-textarea"
        label="Issue Details"
        required
        multiline
        value={ticket_body}
        onChange={(e: any) => setTicketBody(e.target.value)}
        rows={3}
        error={ticketBodyError ? true : false}
        helperText={ticketBodyError ? ticketBodyError : ''}
      />
       
    <Button variant="contained" type="submit">Submit</Button>
  </FormBox>
  )
}

export default IssueTrackerForm;