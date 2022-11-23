import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import styled from 'styled-components';

export default function FilterBy(props: any) {
  const { week, setWeek } = props;

  const handleChange = (event: SelectChangeEvent) => {
    setWeek(event); 
  };

  return (
    <Box>
      <FilterByBox sx={{ m: 1, minWidth: 200 }}size="small">
        <Select
          labelId="filter-by-select-label"
          id="filter-by-select"
          value={week}
          label="Filter By"
          onChange={e => handleChange(e.target.value)}
          variant="standard"
        >
          <MenuItem value={1}>Week 1</MenuItem>
          <MenuItem value={2}>Week 2</MenuItem>
          <MenuItem value={3}>Week 3</MenuItem>
        </Select>
      </FilterByBox>
    </Box>
  );
}

const FilterByBox = styled(FormControl)`
  background-color: white;
  border-radius: 5px;
`
