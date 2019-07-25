import axios from "axios";
import { Dispatch } from "redux";
import { Team, Session, Clicks } from '../models/store';

export const addTeam = (team: string) => {
  return {
    type: "ADD_TEAM",
    team
  };
};

export const addSession = (session: Session) => {
  return {
    type: "ADD_SESSION",
    session
  };
};

export const setTeamsDetails = (teams: Team[]) => {
  return {
    type: "GET_TEAMS",
    teams
  };
};

export const recordClickDetails = (clicks: Clicks) => {
  return {
    type: "POST_TEAM",
    clicks: {
      your_clicks: clicks.your_clicks,
      team_clicks: clicks.team_clicks
    }
  };
};

export const fetchTeams = () => {
  return (dispatch: Dispatch) => {
    return axios
      .get("http://klikuj.herokuapp.com/api/v1/leaderboard")
      .then(res => {
        dispatch(setTeamsDetails(res.data));
      });
  };
};

export const recordClick = (team: string, session: string) => {
  return (dispatch: Dispatch) => {
    return axios
      .post("http://klikuj.herokuapp.com/api/v1/klik", {
        team,
        session
      })
      .then(res => {
        dispatch(recordClickDetails(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
