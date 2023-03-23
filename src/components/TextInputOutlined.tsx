import TextField from '@mui/material/TextField';

const TextInputOutlined = (props: any) => {

  const { label, value, setValue} = props;

  const handleValueChange = (e: any) => {
    setValue(e.target.value);
  }
  return (
    <TextField 
      id="outlined-basic" 
      label={label} 
      variant="outlined" 
      value={value}
      onChange={handleValueChange}
    />
  )
}

export default TextInputOutlined;