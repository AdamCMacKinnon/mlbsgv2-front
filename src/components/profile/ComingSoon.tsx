import React from 'react'
import styled from 'styled-components'

export default function ComingSoon() {
  return (
    <PreviewHeader>
        <h1>Feature Coming Soon!</h1></PreviewHeader>
  )
}

const PreviewHeader = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: large;
color: white;
`
