import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const TextInput = (props: any) => {
  const {value, setValue, label, id} = props;

  const handleValueChange = (e: any) => {
    setValue(e.target.value);
  }
  
  return (
    <FormControl variant="standard">
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        id={id}
        value={value}
        onChange={handleValueChange}
      />
    </FormControl>
  )
}

export default TextInput;