import axios from 'axios';
import jwt_decode from 'jwt-decode';


export function checkToken(token: any){
  if (token) {
    let decodedToken: {id: string, iat: number, exp: number} = jwt_decode(token);
    let now = new Date().getTime() / 1000;
  
    if (now > decodedToken.exp) {
      return false
    }
    return true
  }
}


export function getLocalStorageToken() {
  const token = localStorage.getItem('token');
  return token;
}


export function getUserIdFromToken(token: any){
  let decodedToken: {id: string, iat: number, exp: number} = jwt_decode(token);
  return decodedToken.id
}



export async function getLoggedInUser(token: any){
  if (token) {
    const userId = getUserIdFromToken(token)
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER}/auth/users/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    const data = await response.data;
    return data;
    } catch (error) {
      console.log(error);
    }
  }
}


export async function fetchUsers(token: any) {
  try {
    const response = await axios.get(`${process.env.REACT_APP_SERVER}/auth/standings`);
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

export async function makePick(token: any, week: any, pick: any) {

  try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER}/picks`, {
      week: week,
      pick: pick.name
    },{
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


export const filteredUsersByWeek = (users: any, week: number) => {
  return users.map((user: any) => {
    const userPick = user.picks[week - 1]?.pick;
    return {
      ...user,
      pick: userPick ? userPick : "No Pick",
    };
  });
};


export async function fetchAdminUsers(token: any) {
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