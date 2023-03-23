import styled from 'styled-components';
interface ActiveBannerProps {
  active: boolean
}

export const ActiveBannerContainer = styled.div`
  width: 100%;
  background-color: rgba(6,128,55, 0.8);
  color: ${(props: ActiveBannerProps) => props.active ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 0, 0)'};
`