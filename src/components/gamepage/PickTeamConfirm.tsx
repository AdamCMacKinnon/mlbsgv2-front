import React from 'react'

export default function PickTeamConfirm(props: any) {
    const { response } = props;

    let data: any = [];
    switch (response.status) {
        case 409:
            data = ['red', 'Week or Team are not unique!']
            break;
        case 500:
            data = ['red', 'Server error, contact Support!']
            break;
        default:
            data = ['green', 'good to go! Pick confirmed!']
    }
  return (
    <p style={{color: `${data[0]}`}}>{data[1]}</p>
  )
}
