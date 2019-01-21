import axios from "axios";

export const addTeam = (currentTeam: string) => {
  return {
    type: "ADD_TEAM",
    currentTeam
  };
};

export function fetchTeams() {
  return function(dispatch: any) {
    return axios
      .get("http://klikuj.herokuapp.com/api/v1/leaderboard")
      .then(res => {
        dispatch(setTeamsDetails(res.data), console.log(res.data));
      });
  };
}

export function setTeamsDetails(teams: any) {
  return {
    type: "GET_TEAMS",
    teams
  };
}
