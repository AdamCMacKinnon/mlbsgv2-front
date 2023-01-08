export default function WeekSelection(props: any) {
  const { week, setWeek } = props;

  return (
    <>
      <select value={week} onChange={(e) => setWeek(e.target.value)}>
        <option label="Week 1" value={1} />
        <option label="Week 2" value={2} />
        <option label="Week 3" value={3} />
      </select>
    </>
  );
}