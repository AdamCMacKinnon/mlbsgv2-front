import styled from "styled-components";

import SelectTeamFilter from "./SelectTeamFilter";
import TextField from "@mui/material/TextField";
import WeekSelection from "./WeekSelection";
export default function Filters(props: any) {
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

const FilterContainer = styled.div`
  display: flex;
  background-color: white;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  > div {
    margin: 5px;
  }
`;

