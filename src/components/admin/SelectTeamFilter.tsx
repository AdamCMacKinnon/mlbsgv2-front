import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { teams } from "../../data/teams";

export default function SelectTeamFilter(props: any) {
  const { filterPickValue, setFilterPickValue } = props;

  return (
    <>
      <Box sx={{ width: 300 }}>
        <FormControl fullWidth>
          <InputLabel id="filter-team-label" size="small">Filter Team</InputLabel>
          <Select
            labelId="filter-team-label"
            id="filter-team"
            value={filterPickValue}
            label="Filter Team"
            onChange={(e: any) => setFilterPickValue(e.target.value)}
            size="small"
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="--No Pick">--No Pick--</MenuItem>
            {teams.map((team: any) => (
              <MenuItem key={team.name} value={team.name}>
                {team.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
