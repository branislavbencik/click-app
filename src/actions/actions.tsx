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

export const recordClickDetails = (clicks: any) => {
  return {
    type: "POST_TEAM",
    clicks: {
      your_clicks: clicks.your_clicks,
      team_clicks: clicks.team_clicks
    }
  };
};

export const fetchTeams = () => {
  return (dispatch: any) => {
    return axios
      .get("http://klikuj.herokuapp.com/api/v1/leaderboard")
      .then(res => {
        dispatch(setTeamsDetails(res.data));
      });
  };
};

export const recordClick = (team: string, session: string) => {
  return (dispatch: any) => {
    return axios
      .post("http://klikuj.herokuapp.com/api/v1/klik", {
        team,
        session
      })
      .then(res => {
        dispatch(recordClickDetails(res.data));
      })
      .catch(err => {
        console.log("fail");
      });
  };
};
