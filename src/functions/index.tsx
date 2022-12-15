import axios from 'axios';
import jwt_decode from 'jwt-decode';


export function checkToken(token: any){
  if (token) {
    let decodedToken: {id: string, iat: number, exp: number} = jwt_decode(token);
    let now = new Date().getTime() / 1000;
  
    if (now > decodedToken.exp) {
      console.log('Expired Token');
      return false
    }
    return true
  }
}


export function getUserIdFromToken(token: any){
  let decodedToken: {id: string, iat: number, exp: number} = jwt_decode(token);
  return decodedToken.id
}



export function getLoggedInUser(users: any, token: any){

  if (users && token) {
    const userId = getUserIdFromToken(token)
    return users.filter((user: any) => user.id === userId)[0]
  }
}


export async function fetchUsers(token: any) {
  try {
    const response = await axios.get(`${process.env.REACT_APP_SERVER}/admin/users`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error)
  }
}

export async function login(username: String, password: string) {
  const response = await axios.post(`${process.env.REACT_APP_SERVER}/auth/login`, {
    username,
    password
  })  
  return response;
}