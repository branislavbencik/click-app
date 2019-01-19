import React, { Component } from "react";
import Heading from "./Heading";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Home extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentTeam: "",
      teams: []
    };
  }

  componentDidMount() {
    axios.get("http://klikuj.herokuapp.com/api/v1/leaderboard").then(res => {
      console.log(res);
      this.setState({
        teams: res.data
      });
    });
  }

  public handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.setState({
      currentTeam: "",
      teams: [
        ...this.state.teams,
        {
          order: 1,
          team: this.state.currentTeam,
          clicks: 0
        }
      ]
    });
  };

  public handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      currentTeam: e.target.value
    });
  };

  public renderTeams = (): JSX.Element[] => {
    return this.state.teams.map((teamObject: ITeam, index: number) => {
      return (
        <tr key={index}>
          <td>{teamObject.order}</td>
          <td>{teamObject.team}</td>
          <td>{teamObject.clicks}</td>
        </tr>
      );
    });
  };

  public render(): JSX.Element {
    return (
      <div className="LeaderBoard">
        <Heading />
        <div className="MainContainer">
          <div className="FlexWrapper">
            <form className="Form" onSubmit={this.handleSubmit}>
              <p>Enter Your Team name:</p>
              <input
                className="FormInput"
                type="text"
                placeholder="Your mom"
                value={this.state.currentTeam}
                onChange={this.handleInput}
              />
            </form>
            <Link to={"/" + this.state.currentTeam}>
              <button className="ClickButton" type="submit">
                Click!
              </button>
            </Link>
          </div>
          <table className="Table">
            <thead>
              <tr>
                <th />
                <th>Team</th>
                <th>Clicks</th>
              </tr>
            </thead>
            <tbody>{this.renderTeams()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

interface IState {
  currentTeam: string;
  teams: ITeam[];
}

interface ITeam {
  order: number;
  team: string;
  clicks: number;
}
