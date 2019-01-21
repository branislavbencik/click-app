const initState = {
  currentTeam: "",
  teams: [
    { order: "1", team: "Applifting", clicks: 211 },
    { order: "2", team: "Dominika", clicks: 192 },
    { order: "3", team: "Branislav", clicks: 77 }
  ]
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
