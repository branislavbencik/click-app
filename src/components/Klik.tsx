import React, { Component } from "react";
import Heading from "./Heading";
import axios from "axios";
import Table from "./Table";
import { TableFooter, Footer } from "./Footer";

class Klik extends Component<any, any> {
  /*
  constructor(props: {}) {
    super(props);
    this.state = {
      team: "",
      session: ""
    };
  }

  public post = (): void => {
    axios
      .post("http://klikuj.herokuapp.com/api/v1/klik", {
        team: this.state.team,
        session: this.state.session
      })
      .then(res => {
        console.log(res);
      });
  };

  */

  render() {
    let name: string = this.props.match.params.name;
    let sessionString: string = Math.random().toString(36);
    return (
      <div className="Klik">
        <Heading />
        <div className="MainContainer">
          <div className="FlexWrapper">
            <button className="ClickButton" type="submit">
              Click!
            </button>
          </div>
          <Table />
          <TableFooter />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Klik;
