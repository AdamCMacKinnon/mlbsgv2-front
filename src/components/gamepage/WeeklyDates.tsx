import React from 'react'
import styled from 'styled-components';

export default function WeeklyDates(props: any) {
    const { dates } = props;
    // const startDate = dates.start_date.split('T')[0].slice(5).replace('-','/');
    const endDate = dates.end_date.split('T')[0].slice(5).replace('-','/');
  return (
    <WeeklyDateContainer>
        <WeeklyDateText>
        The season begins:<br /> <i>{endDate}</i>
        </WeeklyDateText>
    </WeeklyDateContainer>
  )
}

const WeeklyDateContainer = styled.div`
margin-top: -10px;
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
const WeeklyDateText = styled.h3`
color: white;
`