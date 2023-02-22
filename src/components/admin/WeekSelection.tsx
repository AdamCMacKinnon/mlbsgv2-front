//Components
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const WeekSelection = (props: any) => {
  const { week, setWeek } = props;

  const weeks = Array.from(Array(26).keys())

  return (
    <>
      <Select
        labelId="select-week-label"
        id="select-week"
        value={week}
        onChange={(e: any) => setWeek(e.target.value)}
        size="small"
      >
        {weeks.map((week: number) => <MenuItem key={week} value={week + 1}>Week {week + 1}</MenuItem>)}
      </Select>

    </>
  );
}

export default WeekSelection;