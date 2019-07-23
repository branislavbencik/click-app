import { ActionTypes } from "../actionTypes/actionTypes";
import { StoreState } from "../models/store";

const initState = {
  teams: [
    {
      order: undefined,
      team: "",
      clicks: undefined
    }
  ],
  sessions: [
    {
      team: "",
      string: ""
    }
  ],
  your_clicks: undefined,
  team_clicks: undefined
};

export const reducer = (
  state: StoreState = initState,
  action: any
) => {
  switch (action.type) {
    case ActionTypes.ADD_TEAM:
      return {
        ...state,
        teams: [
          ...state.teams,
          {
            order: null,
            team: action.team,
            clicks: null
          }
        ]
      };
    case ActionTypes.ADD_SESSION:
      return {
        ...state,
        sessions: [...state.sessions, action.session]
      };

    case ActionTypes.GET_TEAMS:
      return {
        ...state,
        teams: action.teams
      };
    case ActionTypes.POST_TEAM:
      return {
        ...state,
        your_clicks: action.clicks.your_clicks,
        team_clicks: action.clicks.team_clicks
      };
    default:
      return state;
  }
};
