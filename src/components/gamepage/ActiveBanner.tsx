//Styles
import { ActiveBannerContainer } from "./ActiveBanner.styles";

const ActiveBanner = (props: any) => {
  const { user, leagueid } = props;

  const subLeagueStatus = user.subsUsers.filter((l: any) => l.league_id === leagueid);
  return (
    <ActiveBannerContainer active={subLeagueStatus[0].active}>
      {subLeagueStatus[0].active ? <h1> STATUS: ACTIVE</h1> : <h1>STATUS:INACTIVE</h1>}
    </ActiveBannerContainer>
  );
};

export default ActiveBanner;
