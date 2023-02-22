import styled from 'styled-components';
import {Link } from 'react-router-dom'

export const LoginFormSection = styled.div`
  width: 80%;
  max-width: 500px;
  padding: 20px;
  background-color: lightcyan;
  color:rgb(6, 128, 55);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const LoginFormContainer = styled.div`
  height: 97vh;
  width: 100vw;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
`

export const BottomLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 20px;
`
export const LoginFormLink = styled(Link)`
  text-decoration: none;
`