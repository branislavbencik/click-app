import React, { Component } from "react";
import Heading from "./Heading";
import Table from "./Table";
import { TableFooter, Footer } from "./Footer";
import * as actionCreators from "../actions/actions";
import { connect } from "react-redux";
import Clicks from "./Clicks";

class Klik extends Component<any, any> {
  public counter = () => {
    let currentTeam = this.props.sessions[this.props.sessions.length - 1].team;
    let currentSession = this.props.sessions[this.props.sessions.length - 1]
      .session;
    this.props.recordClick(currentTeam, currentSession);
  };

  render() {
    return (
      <div className="Klik">
        <Heading />
        <div className="MainContainer">
          <div className="FlexWrapper">
            <button
              className="ClickButton"
              type="submit"
              onClick={this.counter}
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
