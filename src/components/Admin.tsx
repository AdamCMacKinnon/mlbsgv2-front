import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

import AdminMenu from './admin/AdminMenu';

export default function Admin(props: any) {  
  return (
    <AdminContainer>
      <AdminMenu />
      <Outlet />
    </AdminContainer>
  )
}

const AdminContainer = styled.div`
  width: 80%;  
  padding: 20px;
  color:rgb(6, 128, 55);
  border-radius: 30px;x
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  justify-self: center;
  margin: 0 auto;
  text-align: center;
`