import styled from 'styled-components'

interface GameContainerProps {
  home: boolean
}

interface TeamProps {
  team: boolean
}

export const GameContainer = styled.div`
  background-color: ${(props: GameContainerProps) => props.home ? "rgb(6, 128, 55)" : "white"};
  color: ${(props: GameContainerProps) => props.home ? "white": "black"};
  outline: ${(props: GameContainerProps) => props.home ? " 1px solid white": "1px solid rgb(6, 128, 55)"};
  display: flex;
  margin: 10px;
  padding: 5px 20px;
  font-size: 12px;
  width: 275px;
  justify-content: space-between;

  div:nth-child(2) {
    text-align: right;
  }
`

export const TeamContainer = styled.p`
  font-weight: ${(props: TeamProps) => props.team ? "bolder" : "regular"};
  text-shadow: ${(props: TeamProps) => props.team ? "gold 5px 0 10px" : "none"}
`