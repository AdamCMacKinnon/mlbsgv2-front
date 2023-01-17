import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function WeekSelection(props: any) {
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
        {weeks.map((week: number) => <MenuItem value={week + 1}>Week {week + 1}</MenuItem>)}
      </Select>

    </>
  );
}
