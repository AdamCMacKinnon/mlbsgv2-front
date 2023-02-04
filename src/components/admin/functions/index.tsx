import axios from 'axios';

import { teams } from '../../../data/teams';

export const filterUsersByUsername = (users: any, value: any) => {
  return users.filter((user: any) =>
    user.username.toUpperCase().startsWith(value.toUpperCase())
  );
};

export const filterUsersByPick = (users: any, value: any) => {
  return users.filter((user: any) =>
    user.pick.toUpperCase().startsWith(value.toUpperCase())
  );
};

export const filteredUsersByWeek = (users: any, week: number) => {
  return users.map((user: any) => {
    const userPick = user.picks[week - 1]?.pick;
    return {
      ...user,
      pick: userPick ? userPick : "--No Pick--"
    };
  });
};

export const filterActiveUsers = (users: any) => {
  const showAllUsers = users.filter((user:any) => user.isactive)
  return showAllUsers;
}

export const filterUsers = (
  users: any,
  week: number,
  pickValue: any,
  usernameValue: any,
  showInactive: any
) => {
  let filteredUsers
  const usersByWeek = filteredUsersByWeek(users, week);
  const usersByPick = filterUsersByPick(usersByWeek, pickValue);
  const usersByUsername = filterUsersByUsername(usersByPick, usernameValue);
  if (!showInactive) {
    filteredUsers = filterActiveUsers(usersByUsername);
  } else {
    filteredUsers = usersByUsername
  }
  return filteredUsers;
};

export const getSortedUsers = (users: any, sort: string, direction: string) => {
  switch (sort) {
    case "username":
      const usernames = users.sort((a: any, b: any) => {
        const nameA = a.username.toUpperCase();
        const nameB = b.username.toUpperCase();
        if (direction === "asc") {
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        }
        if (direction === "desc") {
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
        }

        return 0;
      });
      return usernames;
    case "pick":
      const picks = users.sort((a: any, b: any) => {
        const pickA = a.pick.toUpperCase();
        const pickB = b.pick.toUpperCase();
        if (direction === "asc") {
          if (pickA < pickB) {
            return -1;
          }
          if (pickA > pickB) {
            return 1;
          }
        }
        if (direction === "desc") {
          if (pickA < pickB) {
            return 1;
          }
          if (pickA > pickB) {
            return -1;
          }
        }
        return 0;
      });
      return picks;
    case "diff":
      let diff;
      if (direction === "asc") {
        diff = users.sort((a: any, b: any) => a.diff - b.diff);
      }
      if (direction === "desc") {
        diff = users.sort((a: any, b: any) => b.diff - a.diff);
      }
      return diff;
    default:
      return;
  }
};


export const getWeekNumbers = () => {
  const weekNumbers:any = []
  for (let i = 1; i <= 26; i++) {
    weekNumbers.push(i)
  }
  return weekNumbers;
}

export const getTeamsArray = () => {
  const teamNames: any = []
  teams.forEach((team: any) => {
    teamNames.push(team.name)
  })
  return teamNames;
}

export async function eliminateUsers(token: any, users: any) {
  try {
    const response = await axios.patch(`${process.env.REACT_APP_SERVER}/admin/eliminate`, {
      username: users
    },{
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
