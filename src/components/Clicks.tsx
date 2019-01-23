import { connect } from "react-redux";
import React, { Component } from "react";

class Clicks extends Component<any, any> {
  public updateTeamClicks = (teams: any, sessions: any, team_clicks: any) => {
    if (team_clicks) {
      return team_clicks;
    }
    let currentTeam = sessions[sessions.length - 1].team;
    let currentTeamInfo = teams.find((team: any) => {
      return team.team == currentTeam;
    });

    if (currentTeamInfo.clicks !== null) {
      return currentTeamInfo.clicks;
    }
    return 0;
  };

  render() {
    const { teams, sessions, your_clicks, team_clicks } = this.props;
    return (
      <div className="ClicksWrapper">
        <div className="ClicksTextBox">
          <p className="ClicksText">Your Clicks:</p>
          <p className="ClicksNumber">
            {your_clicks === undefined ? 0 : your_clicks}
          </p>
        </div>
        <div className="ClicksTextBox">
          <p className="ClicksText">Team Clicks:</p>
          <p className="ClicksNumber">
            {this.updateTeamClicks(teams, sessions, team_clicks)}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps)(Clicks);
