import React, { Component } from "react";
import Heading from "./Heading";
import axios from "axios";
import Table from "./Table";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actions";
import { TableFooter, Footer } from "./Footer";

class Leaderboard extends Component<any, any> {
  componentDidMount() {
    this.props.fetchTeams();
  }

  public handleSubmit = (e: any): void => {
    e.preventDefault();
    this.props.addTeam(e.target[0].value);
    this.props.history.push("/" + e.target[0].value);
  };

  public render(): JSX.Element {
    return (
      <div className="LeaderBoard">
        <Heading />
        <div className="MainContainer">
          <form className="FormWrapper" onSubmit={this.handleSubmit}>
            <span className="LabelInputWrapper">
              <label>
                <i>Enter Your Team name:</i>
              </label>
              <input type="text" placeholder="Your mom" />
            </span>
            <button className="PlayButton" type="submit">
              Click!
            </button>
          </form>
          <Table />
          <TableFooter />
        </div>
        <Footer />
      </div>
    );
  }
}

interface IProps {
  currentTeam: string;
  teams: ITeam[];
}

interface ITeam {
  order: number;
  team: string;
  clicks: number;
}

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(
  mapStateToProps,
  actionCreators
)(Leaderboard);
