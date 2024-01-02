
import styled from "styled-components";

import AdminMenu from "../components/admin/AdminMenu";


export default function Admin(props: any) {
  return (
    <AdminContainer>
      <AdminMenu />
    </AdminContainer>
  );
}

const AdminContainer = styled.div`
  width: 80%;  
  padding: 20px;
  color:rgb(6, 128, 55);
  border-radius: 30px;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  justify-self: center;
  margin: 50px auto 0;
  text-align: center;
`;
