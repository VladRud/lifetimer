import React from 'react';
import { connect } from "react-redux";
import MainPage from "../components/pages/MainPage/MainPage";

function MainContainer(props) {
  return <MainPage {...props}/>;
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
};

// TODO check in future why need Container for MainPage

export default connect(mapStateToProps)(MainContainer);
