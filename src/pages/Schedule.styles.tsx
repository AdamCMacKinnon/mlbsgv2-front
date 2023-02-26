import styled from 'styled-components';

export const ScheduleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: scroll;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 0 auto;
    flex-wrap: no-wrap;
  }
`

export const FilterContainer = styled.div`
  width: 80%;
  padding: 10px;
  background-color: white;
  margin-top: 40px;
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