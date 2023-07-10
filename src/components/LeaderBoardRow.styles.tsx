import styled from 'styled-components'

interface UserRowProps {
  isactive: boolean
}

export const UserRow = styled.tr`
  // color: ${(props: UserRowProps) => props.isactive ? 'black' : 'grey'};
  // font-style: ${(props: UserRowProps) => props.isactive ? 'bold' : 'italic'};
  // text-decoration: ${(props: UserRowProps) => props.isactive ? 'none' : 'line-through'};
  color: 'black';
`