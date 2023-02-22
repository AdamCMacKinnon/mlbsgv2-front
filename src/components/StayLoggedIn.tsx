
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LoginMoreInfoModal from './LoginMoreInfoModal';

const StayLoggedIn = (props: any) => {
    const {stayLoggedIn, setStayLoggedIn} = props;

    const handleStayLoggedIn = () => {
        setStayLoggedIn(!stayLoggedIn);
    }

    return (
        <FormGroup>
            <FormControlLabel
                control={<Checkbox checked={stayLoggedIn} onChange={handleStayLoggedIn}/>}
                label='Stay Logged In for an hour'
            />
            <LoginMoreInfoModal />
        </FormGroup>
    );
};

export default StayLoggedIn;
