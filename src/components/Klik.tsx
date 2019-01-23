import React, { Component } from "react";
import { Heading } from "./Heading";
import ClickingForTeam from "./ClickingForTeam";
import Table from "./Table";
import { TableFooter, Footer } from "./Footer";
import * as actionCreators from "../actions/actions";
import { connect } from "react-redux";
import Clicks from "./Clicks";

class Klik extends Component<any, {}> {
  public handleClick = () => {
    let session = this.props.sessions[this.props.sessions.length - 1];
    let currentTeam = session.team;
    let currentSession = session.session;
    this.props.recordClick(currentTeam, currentSession);
    this.props.fetchTeams();
  };

  render() {
    return (
      <div className="Klik">
        <Heading />
        <ClickingForTeam />
        <div className="MainContainer">
          <div className="FlexWrapper">
            <button
              className="ClickButton"
              type="submit"
              onClick={this.handleClick}
            >
              Click!
            </button>
            <Clicks />
          </div>
          <Table />
          <TableFooter />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(
  mapStateToProps,
  actionCreators
)(Klik);
