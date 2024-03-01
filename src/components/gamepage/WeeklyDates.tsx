import React from 'react'
import styled from 'styled-components';

export default function WeeklyDates(props: any) {
    const { dates } = props;
    const startDate = dates.start_date.split('T')[0];
    const endDate = dates.end_date.split('T')[0];
  return (
    <WeeklyDateContainer>
        <WeeklyDateText>
        Week {dates.week}: {startDate} to {endDate}
        </WeeklyDateText>
    </WeeklyDateContainer>
  )
}

const WeeklyDateContainer = styled.div`
margin-top: -20px;
display: flex;
align-items: center;
justify-content: center;
margin-left: auto;
margin-right: auto;
background-color: brown;
border-radius: 3px;
width: 95%;
margin-bottom: 40px;
`
const WeeklyDateText = styled.h5`
color: white;
`