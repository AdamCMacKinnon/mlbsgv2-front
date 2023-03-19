import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

export const GamePageLink = styled(Link)`
  color: white;
  margin-top: 20px;
`

export const GameListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 auto;
    flex-wrap: no-wrap;
    position: relative;
  }
`

export const FilterContainer = styled.div`
  width: 80%;
  padding: 10px;
  background-color: white;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > *{
    margin: 5px;
  }

  .homeaway{
    width: 100%;
    display: flex;
    justify-content: center;
    .home {
      height: 15px;
      width: 15px;
      background-color: rgb(6, 128, 55);
      outline: 1px solid black;
      margin: 0 5px;
    }

    .away {
      height: 15px;
      width: 15px;
      background-color: white;
      outline: 1px solid black;
      margin: 0 5px
    }
  }
`