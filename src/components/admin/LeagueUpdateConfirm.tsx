import React from 'react'

export default function LeagueUpdateConfirm(props: any) {
    const { response } = props;
    let data: any = [];
    switch (response.status) {
        case 409:
            data = ['red', 'Conflict when Updating League Info!']
            break;
        case 500:
            data = ['red', 'Server error, contact Support!']
            break;
        default:
            data = ['green', 'League Info Confirmed! You may need to refresh the page to see changes reflected']
    }
  return (
    <p style={{color: `${data[0]}`}}>{data[1]}</p>
  )
}
