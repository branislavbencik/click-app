import React, { Component } from "react";
import Heading from "./Heading";
import Table from "./Table";
import { TableFooter, Footer } from "./Footer";
import * as actionCreators from "../actions/actions";
import { connect } from "react-redux";

class Klik extends Component<any, any> {
  componentDidMount() {
    //this.props.postTeam();
    //this.props.addSession();
  }

  render() {
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

const mapStateToProps = (state: any) => {
  return state;
};
/*
const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddTodo: todo => {
      dispatch(addTodo(toto));
    }
  };
};
*/

export default connect(
  mapStateToProps,
  actionCreators
)(Klik);
