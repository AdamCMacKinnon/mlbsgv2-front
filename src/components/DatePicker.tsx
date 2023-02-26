import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function DatePicker(props: any) {

  const { label, date, setDate} = props
  return (
    <Stack component="form" noValidate spacing={3}>
      <TextField
        id="date"
        label={label}
        type="date"
        defaultValue={date}
        size="small"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={e => setDate(e.target.value)}
      />
    </Stack>
  );
}