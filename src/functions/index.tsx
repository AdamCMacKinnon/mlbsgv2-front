import axios from "axios";
import jwt_decode from "jwt-decode";
import scheduleData from "../data/download.json";

export function checkToken(token: any) {
  if (token) {
    let decodedToken: { id: string; iat: number; exp: number } =
      jwt_decode(token);
    let now = new Date().getTime() / 1000;

    if (now > decodedToken.exp) {
      return false;
    }
    return true;
  }
}

export function getLocalStorageToken() {
  const token = localStorage.getItem("token");
  return token;
}

export function getUserIdFromToken(token: any) {
  let decodedToken: { id: string; iat: number; exp: number } =
    jwt_decode(token);
  return decodedToken.id;
}

export async function getLoggedInUser(token: any) {
  if (token) {
    const userId = getUserIdFromToken(token);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER}/auth/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.data;
      console.log("getLoggedInUser data");
      console.log(response);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export async function fetchUsers() {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER}/data/standings`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchTotalUserDiff() {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER}/data/userdiffs`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function login(username: string, password: string) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER}/auth/login`,
      {
        username,
        password,
      }
    );
    return formatResponse(response);
  } catch (error: any) {
    console.log(error);
    if (error.code === "ERR_NETWORK") {
      return {
        status: 500,
        data: {
          message: "Network Error - Please contact support",
        },
      };
    }
    return {
      status: 401,
      data: {
        message:
          "Invalid Login.  Check your username and password.  If you're still having trouble, contact support.",
      },
    };
  }
}

const formatResponse = (response: any) => {
  return {
    status: response.status,
    data: response.data,
  };
};

/**
 * For now, this function has a hardcoded "leagueId" value.
 * This is temporary for local development.  Replace the UUID here with a subleague
 * that exists on your local DB.  Eventually this will be passed in as a param
 * from user state.
 *
 * @param token
 * @param week
 * @param pick
 * @returns
 */
export async function makePick(token: any, week: any, pick: any) {
  const leagueId = "d730ee25-08bd-408c-9536-000a6e39148c";
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER}/picks`,
      {
        week: week,
        pick: pick.name,
        subleague_id: leagueId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.data;
    console.log("MakePick data");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
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
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER}/admin/users`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createIssueTicket(requestData: any) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER}/email/createticket`,
      requestData
    );
    const data = await response.data;
    return data;
  } catch (e: any) {
    console.log(e);
  }
}

export const updateUserInfo = async (requestData: any, token: string) => {
  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_SERVER}/auth/update/`,
      requestData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error: any) {
    console.log(error);
    return {
      data: {
        message: "Internal Server Error",
      },
      status: 500,
    };
  }
};

export const resetPassword = async (requestData: any) => {
  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_SERVER}/auth/passwordreset/`,
      requestData
    );
    return response;
  } catch (error: any) {
    if (error.code === "ERR_NETWORK") {
      return {
        status: 500,
        message: "API Connection Error",
      };
    } else {
      return {
        status: 404,
        message: "Error Resetting Password.  Credentials are invalid",
      };
    }
  }
};

export const displaySchedule = (
  dateFrom: string,
  dateTo: string,
  team: string
) => {
  const shed: any = scheduleData;

  const filteredDate = shed.dates.filter((date: any) => {
    return date.date >= dateFrom && date.date <= dateTo;
  });
  const gamesByDate = filteredDate.map((date: any) => {
    const filteredGames = date.games.filter((game: any) => {
      return (
        game.teams.away.team.name === team || game.teams.home.team.name === team
      );
    });
    return filteredGames;
  });
  const filteredGames = gamesByDate
    .filter((game: any) => game.length > 0)
    .flat(1);

  return filteredGames;
};

export const getDateTimeByDifference = (daysDifference: number) => {
  const date = Date.now();
  const currentDate = new Date(date);
  const year = currentDate.getFullYear();
  let month = (currentDate.getMonth() + 1).toString();
  let day = (currentDate.getDate() + daysDifference).toString();

  month = month.length === 1 ? "0" + month : month;
  day = day.length === 1 ? "0" + day : day;

  const dateFormatted = `${year}-${month}-${day}`;
  return dateFormatted;
};

export const getDisplayTime = (date: any) => {
  let hour = date.getHours();
  let minutes = date.getMinutes().toString();
  minutes = minutes.length === 1 ? "0" + minutes : minutes;
  let AmOrPm = hour >= 12 ? "pm" : "am";
  hour = hour % 12 || 12;
  return hour + ":" + minutes + " " + AmOrPm;
};

export const resetStateValues = (setState: any[]) => {
  setState.map((state) => state(""));
};

export const enterGlobalLeague = async (token: any) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER}/subs/join`,
      {
        passcode: process.env.REACT_APP_GLOBAL_PASSCODE,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.data;
    return {
      data: data,
      status: 201,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 409,
      message: "LEAGUE NOT FOUND OR ALREADY JOINED",
    };
  }
}

export const joinPrivateLeague = async (token: any, passcode: string) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER}/subs/join`, {
      passcode: passcode
    },{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.data;
    return {
      data: data,
      status: 201
    }
  } catch (error) {
    console.log(error);
    return {
      status: 409,
      message: 'LEAGUE NOT FOUND OR ALREADY JOINED'
    }
  }
}

export const createPrivateLeague = async (token: any, leagueName: string, userEmail: string) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_SERVER}/subs/create`, {
      leagueName: leagueName,
      gameMode: 'survival',
      commishEmail: userEmail
    },{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.data;
    return {
      data: data,
      status: 201
    }
  } catch (error) {
    console.log(error);
    return {
      status: 409,
      message: 'LEAGUE NOT FOUND OR ALREADY JOINED'
    }
  }
}

export const getLeagueLevelUsers = async (leagueid: string, token: string) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_SERVER}/subs/leagues/${leagueid}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.data;
    return {
      data: data,
      status: 200
    }
  } catch (error) {
    console.log(error);
    return {
      status: 404,
      message: 'NO USERS IN THIS LEAGUE'
    }
  }
}
