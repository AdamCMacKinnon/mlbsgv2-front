//Styles
import { ActiveBannerContainer } from "./ActiveBanner.styles";

const ActiveBanner = (props: any) => {
  const { user, week } = props;

  return (
    <ActiveBannerContainer active={user.isactive}>
      {user.isactive ? <h1>WEEK {week} STATUS: ACTIVE</h1> : <h1>WEEK {week} STATUS:INACTIVE</h1>}
    </ActiveBannerContainer>
  );
};

export default ActiveBanner;
