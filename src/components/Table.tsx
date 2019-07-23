import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actions";

class Table extends Component<any, {}> {
  renderTable = () =>
    this.props.teams.slice(0, 10).map((teamObject: ITeam, index: number) => {
      return (
        <tr key={index}>
          <td className="FirstColumn">{teamObject.order}</td>
          <td>{teamObject.team}</td>
          <td className="ThirdColumn">{teamObject.clicks}</td>
        </tr>
      );
    });

  render() {
    return (
      <div>
        <table cellSpacing="0" cellPadding="0" className="Table">
          <thead>
            <tr className="TableHeading">
              <th className="FirstColumn" />
              <th>TEAM</th>
              <th className="ThirdColumn">CLICKS</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
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
)(Table);
