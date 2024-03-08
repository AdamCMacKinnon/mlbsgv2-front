import styled from 'styled-components';
interface ActiveBannerProps {
  active: boolean
}

export const ActiveBannerContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  width: 80%;
  background-color: rgba(6,128,55, 0.8);
  color: ${(props: ActiveBannerProps) => props.active ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 0, 0)'};
`