import { connect } from "react-redux";
import React, { Component } from "react";

class Clicks extends Component<any, any> {
  render() {
    return (
      <div>
        <h1>{this.props.your_clicks}</h1>
        <h1>{this.props.team_clicks}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps)(Clicks);
