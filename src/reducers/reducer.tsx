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
  ]
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
      sessions: [...state.sessions]
    };
  }

  if (action.type == "ADD_SESSION") {
    return {
      teams: [...state.teams],
      sessions: [...state.sessions, action.session]
    };
  }

  if (action.type === "GET_TEAMS") {
    return {
      teams: action.teams,
      sessions: [...state.sessions]
    };
  }
  /*
  if (action.type == "POST_TEAM") {
    return {
      teams: action.teams
      your_clicks: action.your_clicks,
      team_clicks: action.team_clicks
    };
  }
  */

  return state;
};
