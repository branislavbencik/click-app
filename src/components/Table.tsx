import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actions";

class Table extends Component<any, any> {
  public renderTable = (): JSX.Element[] => {
    return this.props.teams
      .slice(0, 8)
      .map((teamObject: ITeam, index: number) => {
        return (
          <tr key={index}>
            <td>{teamObject.order}</td>
            <td>{teamObject.team}</td>
            <td>{teamObject.clicks}</td>
          </tr>
        );
      });
  };

  render() {
    return (
      <div>
        <table cellSpacing="0" cellPadding="0" className="Table">
          <thead>
            <tr>
              <th />
              <th>Team</th>
              <th>Clicks</th>
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
