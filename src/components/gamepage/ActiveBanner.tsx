//Styles
import { ActiveBannerContainer } from "./ActiveBanner.styles";



const ActiveBanner = (props: any) => {
  const { user } = props;

  return (
    <ActiveBannerContainer active={user.isactive}>
      {user.isactive ? (<h1>ACTIVE</h1>) : <h1>INACTIVE</h1>}
    </ActiveBannerContainer>
    
  )
}

export default ActiveBanner;