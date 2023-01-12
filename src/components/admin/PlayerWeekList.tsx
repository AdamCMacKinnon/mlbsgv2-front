

export default function PlayerWeekList(props: any) {
  const { pick } = props;

  return (
    <li>
      Week {pick.week}-{pick.pick}
          </li>
  )
}