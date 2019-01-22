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

export const reducer = (state = initState, action: any) => {
  if (action.type === "ADD_TEAM") {
    return {
      teams: [
        ...state.teams,
        {
          order: null,
          team: action.team,
          clicks: null
        }
      ],
      sessions: [...state.sessions],
      your_clicks: state.your_clicks,
      team_clicks: state.team_clicks
    };
  }

  if (action.type == "ADD_SESSION") {
    return {
      teams: [...state.teams],
      sessions: [...state.sessions, action.session],
      your_clicks: state.your_clicks,
      team_clicks: state.team_clicks
    };
  }

  if (action.type === "GET_TEAMS") {
    return {
      teams: action.teams,
      sessions: [...state.sessions],
      your_clicks: state.your_clicks,
      team_clicks: state.team_clicks
    };
  }

  if (action.type == "POST_TEAM") {
    return {
      teams: [...state.teams],
      sessions: [...state.sessions],
      your_clicks: action.clicks.your_clicks,
      team_clicks: action.clicks.team_clicks
    };
  }

  return state;
};
