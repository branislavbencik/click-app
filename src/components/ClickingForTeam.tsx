import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class KlikHeading extends Component<any, any> {
  render() {
    const { sessions } = this.props;
    let currentTeam = sessions[sessions.length - 1].team;
    return (
      <div className="KlikHeading">
        <h1 className="ClickingForTeamText">
          Clicking for team <b>{currentTeam}</b>
        </h1>
        <div className="InviteFriends">
          <p>
            Too lazy to click? Let your pals click for you:{" "}
            <span className="InviteFriendsLink">
              stfuandclick.com/
              {currentTeam}
            </span>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps)(KlikHeading);
