//Components
import SelectTeamFilter from "./SelectTeamFilter";
import TextField from "@mui/material/TextField";
import WeekSelection from "./WeekSelection";

//Styles
import { FilterContainer } from "./Filters.styles";



const Filters = (props: any) => {
  const {
    week,
    setWeek,
    filterPickValue,
    setFilterPickValue,
    filterUsernameValue,
    setFilterUsernameValue,
  } = props;

  return (
    <FilterContainer>
      <WeekSelection week={week} setWeek={setWeek} />
      <SelectTeamFilter
        filterPickValue={filterPickValue}
        setFilterPickValue={setFilterPickValue}
      />

      <TextField
        id="outlined-basic"
        label="Search Users"
        variant="outlined"
        value={filterUsernameValue}
        onChange={(e: any) => setFilterUsernameValue(e.target.value)}
        size="small"
      />

    </FilterContainer>
  );
}

export default Filters;