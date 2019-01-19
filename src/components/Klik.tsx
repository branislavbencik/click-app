import React, { Component } from "react";
import Heading from "./Heading";
import axios from "axios";

export default class Klik extends Component<any, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      team: "",
      session: ""
    };
  }

  public post = (): void => {
    axios.post("http://klikuj.herokuapp.com/api/v1/klik", {
      team: this.state.team,
      session: this.state.session
    });
  };

  componentDidMount() {
    let name = this.props.match.params.name;
    let sessionString = Math.random().toString(36);
    this.setState({
      team: name,
      session: sessionString
    });
    this.post();
  }

  render() {
    return (
      <div className="container">
        <p>{this.state.session}</p>
      </div>
    );
  }
}

interface IState {
  team: string;
  session: string;
}
