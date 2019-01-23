import React, { Component } from "react";
import { Heading, Quote } from "./Heading";
import img from "../top10clickers.png";
import Table from "./Table";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actions";
import { TableFooter, Footer } from "./Footer";

class Leaderboard extends Component<any, {}> {
  public handleSubmit = (e: any): void => {
    e.preventDefault();
    let team: string = e.target[0].value;
    let session: string = Math.random().toString(36);
    this.props.addSession({ team, session });
    this.props.addTeam(team);
    this.props.history.push("/" + team);
  };

  componentDidMount() {
    this.props.fetchTeams();
  }

  public render(): JSX.Element {
    return (
      <div className="LeaderBoard">
        <Heading />
        <Quote />
        <div className="MainContainer">
          <form className="FormWrapper" onSubmit={this.handleSubmit}>
            <span className="LabelInputWrapper">
              <label className="NameLabel">Enter your team name:</label>
              <input type="text" placeholder="Your mom" />
            </span>
            <button className="PlayButton" type="submit">
              Click!
            </button>
          </form>
          <img className="Top10ClickersImg" src={img} alt="Logo" />
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
)(Leaderboard);
