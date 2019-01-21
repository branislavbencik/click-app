const initState = {
  currentTeam: "",
  teams: []
};

export const reducer = (state = initState, action: any) => {
  console.log(state);
  if (action.type === "ADD_TEAM") {
    return {
      currentTeam: "",
      teams: [
        ...state.teams,
        {
          order: "1",
          team: action.currentTeam,
          clicks: 0
        }
      ]
    };
  }

  if (action.type === "GET_TEAMS") {
    return {
      currentTeam: "",
      teams: action.teams
    };
  }

  return state;
};
