export interface RankedUser {
  rank: number;
  username: string;
  diff: number;
}


export const getRankings = (users: any) => {
  const rankedUsers: RankedUser[] = [];
  let currentRank = 0;
  let currentDiff = 0;
  let incrementRank = 1;

  
  const sortedUsers = users.sort((a: any, b: any) => b.diff - a.diff);

  for (let i = 0; i < sortedUsers.length; i++) {
    if (sortedUsers[i].diff !== currentDiff) {
      currentDiff = users[i].diff;
      currentRank = incrementRank;
    }
    let currentUser = {
      rank: currentRank,
      username: sortedUsers[i].username,
      diff: sortedUsers[i].diff
    };
    incrementRank++;
    rankedUsers.push(currentUser);
  }
  return rankedUsers;
};

export const topRankedUsers = (users: any, currentUser: any) => {

  const activeUsers = users.filter((user:any) => user.isactive);
  const usersByRanking = getRankings(activeUsers);

  const userRankingIndex = usersByRanking.findIndex(
    (user: any) => user.username === currentUser.username);


  let section: RankedUser[] = [];

  if (userRankingIndex > 9) {
    let firstSection = [...usersByRanking].slice(0, 9);
    section = [...firstSection, usersByRanking[userRankingIndex]];
  } else {
    section = [...usersByRanking].slice(0, 10);
  }

  return section;
}