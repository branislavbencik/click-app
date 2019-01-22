import axios from "axios";

export const addTeam = (team: string) => {
  return {
    type: "ADD_TEAM",
    team
  };
};

export const addSession = (session: any) => {
  return {
    type: "ADD_SESSION",
    session
  };
};

export const setTeamsDetails = (teams: any) => {
  return {
    type: "GET_TEAMS",
    teams
  };
};

export const postTeamSuccess = (team: []) => {
  return {
    type: "POST_TEAM",
    team
  };
};

export const fetchTeams = () => {
  return (dispatch: any) => {
    return axios
      .get("http://klikuj.herokuapp.com/api/v1/leaderboard")
      .then(res => {
        dispatch(setTeamsDetails(res.data), console.log(res.data));
      });
  };
};

export const postTeam = (name: string, session: string) => {
  return (dispatch: any) => {
    return axios
      .post(`https://jsonplaceholder.typicode.com/todos`, {
        name,
        session
      })
      .then(res => {
        dispatch(postTeamSuccess(res.data));
      })
      .catch(err => {
        console.log("fail");
      });
  };
};
