const PlayerWeekList = (props: any) => {
  const { pick } = props;

  return <li>Week {pick.week}-{pick.pick}</li>
}

export default PlayerWeekList;